from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers

from .models import PostDetail, Post

from user.serializer import UserSerializer


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
        
        
        
#Below Serializer is the combination of CustomField and Model Feilds
class PostListSerializer(serializers.ModelSerializer):
    total_comment = serializers.SerializerMethodField('get_total_comment')
    liked_by = serializers.SerializerMethodField('get_liked_by')
    user = UserSerializer(read_only=True)
    comment_usr = serializers.SerializerMethodField('get_first_comment_username_userid')
    class Meta:
        model = Post
        fields = ['id', 'file', 'post_info', 'post_time_stamp','total_comment','liked_by','user','comment_usr']

    def get_total_comment(self,obj):
        if obj:
            post = Post.objects.filter(id = obj.id).first()
            list_comments = PostDetail.objects.filter(post=post,comment__isnull=False)
            return len(list_comments)
        return None

    def get_liked_by(self,obj):
        if obj:
            post = Post.objects.filter(id = obj.id).first()
            list_liked_post = PostDetail.objects.filter(post = post,like=True)
            user_liked_post_list = []
            for comment_post in list_liked_post:
                user_liked_post_list.append(comment_post.user.username)
            if len(user_liked_post_list) == 0:
                return None
            else:
                return user_liked_post_list
        return None
        
    def get_first_comment_username_userid(self,obj):
        if obj:
            post = Post.objects.get(id=obj.id)
            list_comments = PostDetail.objects.filter(post=post,comment__isnull=False).first()
            if list_comments == None:
                return None
            else:
                comment_details = [list_comments.user.username,list_comments.user.id,list_comments.comment]
                return comment_details
        return None
        


class PostLikeCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostDetail
        fields = '__all__'

    def create(self, validated_data):
        post = PostDetail.objects.update_or_create(**validated_data)
        return post


class PostDetailSerializer(serializers.ModelSerializer):
    post_detail = PostLikeCommentSerializer(many=True,read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'file', 'post_info', 'post_time_stamp', 'post_detail']







