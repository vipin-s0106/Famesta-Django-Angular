from django.shortcuts import render
from rest_framework.views import APIView

from django.shortcuts import render,HttpResponse
from rest_framework.response import Response

# importing models
from .models import Follower
from user.models import User

#importing Serializer
from user.serializer import UserSerializer
from .serializer import FollowSerializer,FollowerSerializer,FollowingSerializer



class GetSuggestion(APIView):
	def get(self,request,user_id):
		try:
			not_required_in_list = []
			suggestion_user_list = []
			user = User.objects.get(pk=user_id)
			not_required_in_list.append(user)
			followd_user_list = Follower.objects.filter(user=user)
			for followd_user in followd_user_list:
				not_required_in_list.append(followd_user.followed_user)
				follower_follower_list = Follower.objects.filter(user=followd_user.followed_user)
				for suggested_user in follower_follower_list:
					if suggested_user.followed_user not in not_required_in_list:
						if suggested_user.followed_user not in suggestion_user_list:
							suggestion_user_list.append(suggested_user.followed_user)
			if len(suggestion_user_list) > 0:
				suggestion_serializer = UserSerializer(suggestion_user_list,many=True)
				return Response(suggestion_serializer.data,status=200)
			else:
				return Response({"msg":"No Suggestion found"},status=404)
		except:
			return Response({"error":"Something happend at server side"},status=500)



class AcceptFollowRequest(APIView):
	def post(self,request,user_id,follower_id):
		post_data = request.data
		post_data['user'] = User.objects.get(pk=user_id)
		post_data['followed_user'] = User.objects.get(pk=follower_id)
		follower_obj = Follower.objects.filter(user=post_data['user'],followed_user=post_data['followed_user']).first()
		if follower_obj is None:
			post_data['user'] = user_id
			post_data['followed_user'] = follower_id
			serializer = FollowSerializer(data=post_data)
			if serializer.is_valid():
				serializer.save()
				return Response(serializer.data,status=201)
			else:
				return Response({"error":serializer.error_messages},status=400)
		else:
			return Response({"msg":"you already followed the given user"},status=400)



class UnfollowUser(APIView):
	def delete(self,request,user_id,follower_id):
		follower_obj = Follower.objects.filter(user=User.objects.get(pk=user_id), followed_user=User.objects.get(pk=follower_id)).first()
		follower_obj.delete()
		return Response(status=200)

class GetUserFollowers(APIView):
	def get(self,request,user_id):
		user = User.objects.filter(id=user_id).first()
		print(user)
		data = Follower.objects.filter(user=user)
		serializer = FollowerSerializer(data,many=True)
		return Response(serializer.data,status=200)



class GetUserFollowings(APIView):
	def get(self, request, user_id):
		user = User.objects.filter(id=user_id).first()
		data = Follower.objects.filter(followed_user=user)
		serializer = FollowingSerializer(data, many=True)
		return Response(serializer.data, status=200)


class BlockedUser(APIView):
	def put(self,request,user_id,follower_id):
		data = request.data
		data['block_Status'] = True
		instance = Follower.objects.filter(user=User.objects.get(pk=user_id),followed_user=User.objects.get(pk=follower_id)).first()
		if instance is not None:
			serializer = FollowerSerializer(instance,data=data,partial=True)
			if serializer.is_valid():
				serializer.save()
				return Response(serializer.data,status=200)
			else:
				return Response({"error":serializer.error_messages},status=400)
		else:
			return Response({"msg":"you don't follow the given user"},status=400)

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


