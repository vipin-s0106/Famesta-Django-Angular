from django.shortcuts import render
from rest_framework.views import APIView

from django.shortcuts import render, HttpResponse
from rest_framework.response import Response

# importing models
from .models import Follower
from user.models import User
from notification.models import Notification

# importing Serializer
from user.serializer import UserSerializer
from .serializer import FollowSerializer, FollowerSerializer, FollowingSerializer, FollowStatusSerializer

import requests


class GetSuggestion(APIView):
    def get(self, request, user_id):
        try:
            not_required_in_list = []
            suggestion_user_list = []
            user = User.objects.get(pk=user_id)
            not_required_in_list.append(user)
            followd_user_list = Follower.objects.filter(user=user)
            request_sent_list = Notification.objects.filter(other_user=user,notification_type="follow")


            for follower in followd_user_list:
                not_required_in_list.append(follower.followed_user)

            #append the user to whom you have already requested
            for requested_user in request_sent_list:
                not_required_in_list.append(requested_user.user)

            for followd_user in followd_user_list:
                follower_follower_list = Follower.objects.filter(user=followd_user.followed_user)
                for suggested_user in follower_follower_list:
                    if suggested_user.followed_user not in not_required_in_list:
                        if suggested_user.followed_user not in suggestion_user_list:
                            suggestion_user_list.append(suggested_user.followed_user)
            if len(suggestion_user_list) > 0:
                suggestion_serializer = UserSerializer(suggestion_user_list, many=True)
                return Response(suggestion_serializer.data, status=200)
            else:
                return Response({"msg": "No Suggestion found"}, status=200)
        except:
            return Response({"error": "Something happend at server side"}, status=500)


class AcceptFollowRequest(APIView):

    def post(self, request, user_id, follower_id):
        post_data = request.data
        post_data['user'] = User.objects.get(pk=follower_id)
        post_data['followed_user'] = User.objects.get(pk=user_id)
        follower_obj = Follower.objects.filter(user=post_data['user'], followed_user=post_data['followed_user']).first()
        if follower_obj is None:
            post_data['user'] = follower_id
            post_data['followed_user'] = user_id
            serializer = FollowSerializer(data=post_data)
            if serializer.is_valid():

                ################################################################
                '''
				Updating the notfication as well that the user has accepted the request
				'''
                notification_data = {
                    "message": str(User.objects.get(pk=user_id).username) + " has accepted your request",
                    "notification_type": "request_accepted",
                    "other_user": user_id
                }
                # getting the bearer token
                bearer_token = request.headers.get('Authorization')
                headers = {
                    'Contetent-Type': 'application/json',
                    'Allow': 'POST, OPTIONS',
                    'Authorization': bearer_token
                }
                # print(headers)
                notification_url = r"http://" + request.META['HTTP_HOST'] + "/api/notification/" + str(
                    follower_id) + "/"
                notification_response = requests.post(notification_url, data=notification_data, headers=headers)
                ################################################################
                if notification_response.status_code == 201:
                    serializer.save()
                    return Response(serializer.data, status=201)
                return Response(status=notification_response.status_code)
            else:
                return Response({"error": serializer.error_messages}, status=400)
        else:
            return Response({"msg": "you already followed the given user"}, status=400)


class UnfollowUser(APIView):
    def delete(self, request, user_id, follower_id):
        follower_obj = Follower.objects.filter(user=User.objects.get(pk=user_id),
                                               followed_user=User.objects.get(pk=follower_id)).first()
        follower_obj.delete()
        return Response(status=200)


class RemoveFollowedUser(APIView):  # Removing from the following
    def delete(self, request, user_id, followed_user_id):
        follower_obj = Follower.objects.filter(user=User.objects.get(pk=followed_user_id),
                                               followed_user=User.objects.get(pk=user_id)).first()
        follower_obj.delete()
        return Response(status=200)


class GetUserFollowings(APIView):
    def get(self, request, user_id):
        user = User.objects.filter(id=user_id).first()
        print(user)
        data = Follower.objects.filter(user=user)
        serilizer_context = {'request': request}
        serializer = FollowingSerializer(data, many=True,context=serilizer_context)
        return Response(serializer.data, status=200)


class GetUserFollowers(APIView):
    def get(self, request, user_id):
        user = User.objects.filter(id=user_id).first()
        data = Follower.objects.filter(followed_user=user)
        serilizer_context = {'request':request}
        serializer = FollowerSerializer(data, many=True,context=serilizer_context)
        return Response(serializer.data, status=200)


class BlockedUser(APIView):
    def put(self, request, user_id, follower_id):
        data = request.data
        data['block_Status'] = True
        instance = Follower.objects.filter(user=User.objects.get(pk=user_id),
                                           followed_user=User.objects.get(pk=follower_id)).first()
        if instance is not None:
            serializer = FollowerSerializer(instance, data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=200)
            else:
                return Response({"error": serializer.error_messages}, status=400)
        else:
            return Response({"msg": "you don't follow the given user"}, status=400)


class UnblockedUser(APIView):
    def put(self, request, user_id, follower_id):
        print(request.path)
        data = request.data
        data['block_Status'] = False
        instance = Follower.objects.filter(user=User.objects.get(pk=user_id),
                                           followed_user=User.objects.get(pk=follower_id)).first()
        if instance is not None:
            serializer = FollowerSerializer(instance, data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=200)
            else:
                return Response({"error": serializer.error_messages}, status=400)
        else:
            return Response({"msg": "you don't follow the given user"}, status=400)


class FollowStatusAPIView(APIView):
    def get(self, request, other_user_id):
        user = User.objects.get(id=request.user.id)
        other_user = User.objects.get(id=other_user_id)
        print(user)
        print(other_user)
        data = {
            'follow_request_sent': None,
            'followed_status': None
        }
        object = Follower.objects.filter(user=user, followed_user=other_user).first()
        if object:
            data['followed_status'] = True

        instance = Notification.objects.filter(user=other_user, other_user=user, notification_type="follow").first()
        if instance:
            data['follow_request_sent'] = True
        serializer = FollowStatusSerializer(data)
        return Response(serializer.data, status=200)
