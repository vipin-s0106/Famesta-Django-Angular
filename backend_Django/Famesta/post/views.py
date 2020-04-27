from django.shortcuts import render,HttpResponse
from rest_framework.response import Response

from rest_framework.views import APIView

#importing the Decorators
from rest_framework.decorators import api_view,permission_classes,authentication_classes

#importing permissions and authentication
from rest_framework.permissions import IsAuthenticated

#importing Serializer
from.serializer import PostLikeCommentSerializer,PostDetailSerializer,PostListSerializer,PostSerializer

#importing models
from .models import PostDetail,Post
from user.models import User


class PostStoryCreateView(APIView):

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


class PostStoryListView(APIView):
    def get_object(self,user_id):
        user = User.objects.filter(id = user_id).first()
        posts = Post.objects.filter(user = user)
        return posts

    def get(self,request,user_id):
        posts = self.get_object(user_id)
        if len(posts) == 0:
            return Response({"error":"for userID - "+str(user_id)+" story is not exist"},status=400)
        serializer = PostListSerializer(posts,many=True)
        return Response(serializer.data)


class PostStoryDetailView(APIView):

    def get_object(self,post_id):
        post = Post.objects.filter(id = post_id).first()
        return post

    def get(self,request,post_id):
        post = self.get_object(post_id)
        print(post)
        if post is None:
            return Response({"error":"for postID - "+str(post_id)+" story is not exist"},status=400)
        serializer_context = {
            'request': request,
        }
        serializer = PostDetailSerializer(post,context=serializer_context)
        print(serializer.data)
        return Response(serializer.data)

    def delete(self,request,post_id):
        post = self.get_object(post_id)
        if post is None:
            return Response({"error":"for postID - "+str(post_id)+" story is not exist"},status=400)
        post.delete()
        return Response(status=200)


class ListCommentView(APIView):

    def get_object(self,post_id):
        post = Post.objects.filter(id = post_id).first()
        post_comments = PostDetail.objects.filter(post=post)
        return post_comments

    def get(self,request,post_id):
        post_comments = self.get_object(post_id)
        if len(post_comments) == 0:
            return Response({"error":"for postID - "+str(post_id)+" story is not exist"},status=400)
        serializer = PostLikeCommentSerializer(post_comments,many=True)
        return Response(serializer.data)



class CommentCreateView(APIView):

    def post(self,request,user_id,post_id):
        post_data = request.data
        post_data['user'] = user_id
        post_data['post'] = post_id
        serializer = PostLikeCommentSerializer(data=post_data)
        if serializer.is_valid():
            serializer.save()
            post = Post.objects.filter(id=post_id).first()
            serializer = PostDetailSerializer(post)
            return Response(serializer.data,status=201)
        return Response({'error':serializer.error_messages},status=400)


class CommentDeleteView(APIView):

    def get_comment(self,comment_id):
        comment = PostDetail.objects.filter(id=comment_id).first()
        return comment

    def delete(self,request,user_id,comment_id):
        comment = self.get_comment(comment_id)
        if comment is None:
            return Response({"error":"for commentID - "+str(comment_id)+" comment is not exist"},status=400)
        comment.delete()
        return Response(status=200)


class LikeCreateView(APIView):
    def post(self,request,user_id,post_id):
        post_data = request.data
        post_data['user'] = user_id
        post_data['post'] = post_id
        serializer = PostLikeCommentSerializer(data=post_data)
        if serializer.is_valid():
            serializer.save()
            post = Post.objects.filter(id=post_id).first()
            serializer = PostDetailSerializer(post)
            return Response(serializer.data,status=201) #Like Updated by the user
        else:
            return Response({"error":serializer.error_messages},status=400) #bad request



