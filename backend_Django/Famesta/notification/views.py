from django.shortcuts import render
from rest_framework.response import Response

from rest_framework.views import APIView
from rest_framework.decorators import api_view,permission_classes,authentication_classes


from .serializer import NotificationSerializer,NotificationCreateSerializer

from .models import Notification
from user.models import User
from post.models import Post

from rest_framework.permissions import IsAuthenticated

class NotificationFollowRequestCreateView(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self,request,user_id):
        data = request.data
        data['user'] = user_id
        serializer = NotificationCreateSerializer(data=data)
        # print(data)
        if serializer.is_valid():
            #serializer.save()
            if data['notification_type'] == "like" or data['notification_type'] == "comment":
                instance = Notification.objects.filter(user=User.objects.get(pk=user_id),
                                                       post=Post.objects.get(pk=data['post']),
                                                       notification_type="like").first()
                if instance is None:
                    serializer.save()
                elif data['notification_type'] == "comment":
                    serializer.save()
                instance = Notification.objects.filter(user=User.objects.get(pk=user_id),
                                                       post=Post.objects.get(pk=data['post']),
                                                       notification_type=data['notification_type']).first()
            else:
                serializer.save()
                instance = Notification.objects.filter(user=User.objects.get(pk=user_id),
                                                       other_user=User.objects.get(pk=data['other_user']),
                                                       notification_type=data['notification_type']).first()
            serializer = NotificationSerializer(instance)
            return Response(serializer.data,status=201)
        return Response({"error":serializer.error_messages},status=400)


class NotificationAPIView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self,request,user_id):
        data = request.data
        # print(data)
        '''
        changing the mutability of data so that it can be change , if you will call the API using postman you won't face any issue
        but if you call using request or from other domain this need to be done
        '''
        #################
        _mutable = data._mutable
        #
        # # set to mutable
        data._mutable = True
        #
        # # сhange the values you want
        data['user'] = user_id
        #
        # # set mutable flag back
        data._mutable = _mutable
        ############################

        serializer = NotificationCreateSerializer(data=data)
        # print(data)
        if serializer.is_valid():
            #serializer.save()
            if data['notification_type'] == "like" or data['notification_type'] == "comment":
                instance = Notification.objects.filter(user=User.objects.get(pk=user_id),
                                                       post=Post.objects.get(pk=data['post']),
                                                       notification_type="like").first()
                if instance is None:
                    serializer.save()
                elif data['notification_type'] == "comment":
                    serializer.save()
                instance = Notification.objects.filter(user=User.objects.get(pk=user_id),
                                                       post=Post.objects.get(pk=data['post']),
                                                       notification_type=data['notification_type']).first()
            else:
                serializer.save()
                instance = Notification.objects.filter(user=User.objects.get(pk=user_id),
                                                       other_user=User.objects.get(pk=data['other_user']),
                                                       notification_type=data['notification_type']).first()
            serializer = NotificationSerializer(instance)
            return Response(serializer.data,status=201)
        return Response({"error":serializer.error_messages},status=400)

    def delete(self,request,notification_id):
        notification = Notification.objects.get(id=notification_id)
        notification.delete()
        return Response(status=200)

    def get(self,request,user_id):
        # print(user_id,request.user.id)
        if str(user_id) == str(request.user.id):
            user = User.objects.filter(pk=user_id).first()
            if user:
                instance = Notification.objects.filter(user=user).order_by('-timestamp')
                serializer_context = {'request':request}
                serializer = NotificationSerializer(instance,many=True,context=serializer_context)
                return Response(serializer.data,status=200)
            else:
                return Response({"error":"Given user id does not exist"},status=400)
        else:
            return Response({"error": "Unauthorized User to see the notification"}, status=403)

    def put(self,request,notification_id):
        instance = Notification.objects.filter(id = notification_id).first()
        if instance:
            serializer = NotificationSerializer(instance,data=request.data,partial=True)
            if serializer.is_valid():
                serializer.save()
                serializer = NotificationSerializer(Notification.objects.get(pk=notification_id))
                return Response(serializer.data,status=200) #modified the resource
        else:
            return Response({"error":"Bad request with given notification id"},status=400)





@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_all_notification(request,user_id):
    Notification.objects.filter(user=User.objects.get(pk=user_id)).delete()
    return Response(status=200)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_notification_count(request,user_id):
    length = len(Notification.objects.filter(user=User.objects.get(pk=user_id)))
    return Response({"notification_count":str(length)},status=200)

