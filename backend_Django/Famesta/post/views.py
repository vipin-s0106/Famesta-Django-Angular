from django.shortcuts import render,HttpResponse
from rest_framework.response import Response

from rest_framework.views import APIView

#importing the Decorators
from rest_framework.decorators import api_view,permission_classes,authentication_classes

#importing permissions and authentication
from rest_framework.permissions import IsAuthenticated

#importing Serializer
from.serializer import PostLikeCommentSerializer,PostDetailSerializer,PostListSerializer,PostSerializer,PostLikeCommentCreateSerializer

#importing models
from .models import PostDetail,Post
from user.models import User
from followers.models import Follower
import json

import requests


class PostStoryCreateView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self,request,user_id):
        user = User.objects.filter(id=user_id).first()
        post_data = request.data
        post_data['user'] = user.id
        serializer = PostSerializer(data = post_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        else:
            return Response(serializer.error_messages,status=400)


class GetAllUserStoryListView(APIView):

    permission_classes = (IsAuthenticated,)

    def get_object(self,user_id):
        user = User.objects.filter(id = user_id).first()
        posts = Post.objects.filter(user = user)
        return posts

    def get(self,request,user_id):
        posts = self.get_object(user_id)
        followers_list = Follower.objects.filter(user = User.objects.filter(id = user_id).first())
        for follower in followers_list:
            posts = posts.union(Post.objects.filter(user = User.objects.filter(id = follower.followed_user.id).first()))
        posts = posts.order_by('-post_time_stamp')
        #if len(posts) == 0:
            #return Response({"error":"for userID - "+str(user_id)+" story is not exist"},status=400)

        '''
        this serializer context is very important if you want to access the request data into the serializer class and method
        '''
        serializer_context = {
            'request': request,
        }
        serializer = PostListSerializer(posts,many=True,context=serializer_context)
        return Response(serializer.data)







class UserStoryListView(APIView):

    permission_classes = (IsAuthenticated,)

    def get_object(self,user_id):
        user = User.objects.filter(id = user_id).first()
        posts = Post.objects.filter(user = user)
        return posts

    def get(self,request,user_id):
        posts = self.get_object(user_id)
        #if len(posts) == 0:
            #return Response({"error":"for userID - "+str(user_id)+" story is not exist"},status=400)
        serializer = PostListSerializer(posts,many=True)
        return Response(serializer.data)


class PostStoryDetailView(APIView):

    permission_classes = (IsAuthenticated,)

    def get_object(self,post_id):
        post = Post.objects.filter(id = post_id).first()
        return post

    def get(self,request,post_id):
        post = self.get_object(post_id)
        # print(post)
        if post is None:
            return Response({"error":"for postID - "+str(post_id)+" story is not exist"},status=400)
        serializer_context = {
            'request': request,
        }
        serializer = PostDetailSerializer(post,context=serializer_context)
        # print(serializer.data)
        return Response(serializer.data)

    def delete(self,request,post_id):
        post = self.get_object(post_id)
        if post is None:
            return Response({"error":"for postID - "+str(post_id)+" story is not exist"},status=400)
        post.delete()
        return Response(status=200)


class ListCommentView(APIView):
    permission_classes = (IsAuthenticated,)

    def get_object(self,post_id):
        post = Post.objects.filter(id = post_id).first()
        post_comments = PostDetail.objects.filter(post=post,comment__isnull=False)
        return post_comments

    def get(self,request,post_id):
        post_comments = self.get_object(post_id)
        #if len(post_comments) == 0:
            #return Response({"error":"for postID - "+str(post_id)+" story is not exist"},status=400)
        serializer = PostLikeCommentSerializer(post_comments,many=True)
        return Response(serializer.data)

class ListLikeView(APIView):
    permission_classes = (IsAuthenticated,)

    def get_object(self,post_id):
        post = Post.objects.filter(id = post_id).first()
        post_likes = PostDetail.objects.filter(post=post,like_isnull=False)
        return post_likes

    def get(self,request,post_id):
        post_likes = self.get_object(post_id)
        #if len(post_comments) == 0:
            #return Response({"error":"for postID - "+str(post_id)+" story is not exist"},status=400)
        serializer = PostLikeCommentSerializer(post_likes,many=True)
        return Response(serializer.data)




class CommentCreateView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self,request,user_id,post_id):
        post_data = request.data
        post = Post.objects.get(id=post_id)
        post_username = post.user.username
        post_data['user'] = user_id
        post_data['post'] = post_id
        serializer = PostLikeCommentCreateSerializer(data=post_data)
        if serializer.is_valid():
            if request.user.username != post_username:
                #########################################
                '''
                Creating Notification for that
                '''
                notification_data = {
                    "message": str(User.objects.get(pk=user_id).username) + " has commented on your post",
                    "notification_type": "comment",
                    "post": post_id,
                    "other_user":user_id
                }
                # getting the bearer token
                bearer_token = request.headers.get('Authorization')
                headers = {
                    'Contetent-Type': 'application/json',
                    'Allow': 'POST, OPTIONS',
                    'Authorization': bearer_token
                }
                # getting the user who have uploaded the post
                user_id_of_post = Post.objects.get(id=post_id).user.id
                notification_url = r"http://" + request.META['HTTP_HOST'] + "/api/notification/" + str(
                    user_id_of_post) + "/"
                notification_response = requests.post(notification_url, data=notification_data, headers=headers)
                #########################################
                if notification_response.status_code == 201:
                    serializer.save()
                    post = Post.objects.filter(id=post_id).first()
                    serializer = PostDetailSerializer(post)
                    return Response(serializer.data,status=201)
                return Response(notification_response.status_code)
            else:
                serializer.save()
                post = Post.objects.filter(id=post_id).first()
                serializer = PostDetailSerializer(post)
                return Response(serializer.data, status=201)
        return Response({'error':serializer.error_messages},status=400)


class CommentDeleteView(APIView):
    permission_classes = (IsAuthenticated,)

    def get_comment(self,comment_id):
        comment = PostDetail.objects.filter(id=comment_id).first()
        return comment

    def delete(self,request,comment_id):
        comment = self.get_comment(comment_id)
        if comment is None:
            return Response({"error":"for commentID - "+str(comment_id)+" comment is not exist"},status=400)
        comment.delete()
        return Response(status=200)


class LikeCreateView(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self,request,user_id,post_id):
        post_data = request.data
        print(post_data)
        post_data['user'] = user_id
        post_data['post'] = post_id
        print(post_data)
        serializer = PostLikeCommentCreateSerializer(data=post_data)
        if serializer.is_valid():
            #########################################
            '''
            Creating Notification for that
            '''
            notification_data = {
                "message": str(User.objects.get(pk=user_id).username) + " has liked your post",
                "notification_type": "like",
                "post": post_id,
                "other_user":user_id
            }
            # getting the bearer token
            bearer_token = request.headers.get('Authorization')
            headers = {
                'Contetent-Type': 'application/json',
                'Allow': 'POST, OPTIONS',
                'Authorization': bearer_token
            }
            #getting the user who have uploaded the post
            user_id_of_post = Post.objects.get(id=post_id).user.id
            notification_url = r"http://" + request.META['HTTP_HOST'] + "/api/notification/" + str(user_id_of_post) + "/"
            notification_response = requests.post(notification_url, data=notification_data, headers=headers)
            #########################################
            if notification_response.status_code == 201:
                serializer.save()
                post = Post.objects.filter(id=post_id).first()
                serializer = PostDetailSerializer(post)
                return Response(serializer.data,status=201) #Like Updated by the user
            return Response(status=400)
        else:
            return Response({"error":serializer.error_messages},status=400) #bad request



