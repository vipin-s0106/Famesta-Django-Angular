from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers

from .models import PostDetail, Post
from followers.models import Follower
from notification.models import Notification

from user.serializer import UserSerializer


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


# Below Serializer is the combination of CustomField and Model Feilds
class PostListSerializer(serializers.ModelSerializer):
    total_comment = serializers.SerializerMethodField('get_total_comment')
    liked_by = serializers.SerializerMethodField('get_liked_by')
    user = UserSerializer(read_only=True)
    comment_usr = serializers.SerializerMethodField('get_first_comment_username_userid')

    class Meta:
        model = Post
        fields = ['id', 'file', 'post_info', 'post_time_stamp', 'total_comment', 'liked_by', 'user', 'comment_usr']

    def get_total_comment(self, obj):
        if obj:
            post = Post.objects.filter(id=obj.id).first()
            list_comments = PostDetail.objects.filter(post=post, comment__isnull=False)
            return len(list_comments)
        return None

    def get_liked_by(self, obj):
        if obj:
            post = Post.objects.filter(id=obj.id).first()
            list_liked_post = PostDetail.objects.filter(post=post, like=True)
            user_liked_post_list = []
            for comment_post in list_liked_post:
                user_liked_post_list.append(comment_post.user.username)
            if len(user_liked_post_list) == 0:
                return None
            else:
                return user_liked_post_list
        return None

    def get_first_comment_username_userid(self, obj):
        if obj:
            post = Post.objects.get(id=obj.id)
            list_comments = PostDetail.objects.filter(post=post, comment__isnull=False).first()
            if list_comments == None:
                return None
            else:
                comment_details = [list_comments.user.username, list_comments.user.id, list_comments.comment]
                return comment_details
        return None


class PostLikeCommentSerializer(serializers.HyperlinkedModelSerializer):
    user = UserSerializer(read_only=True)
    followed_status = serializers.SerializerMethodField('getFollowedStatus')
    follow_request_sent = serializers.SerializerMethodField('check_Followrequest_sent')

    class Meta:
        model = PostDetail
        fields = ['comment', 'like', 'post_action_timestamp', 'user','followed_status','follow_request_sent']

    def create(self, validated_data):
        post = PostDetail.objects.update_or_create(**validated_data)
        return post

    def check_Followrequest_sent(self,obj):
        if obj:
            user = obj.user
            request = self.context.get("request")
            if request and hasattr(request, "user"):
                instance = Notification.objects.filter(user=user,other_user=request.user,notification_type="follow")
                if instance:
                    return True
                return False
            return None

        return None

    def getFollowedStatus(self,obj):
        if obj:
            request = self.context.get("request")
            if request and hasattr(request, "user"):
                logged_user = request.user
                other_user = obj.user
                object = Follower.objects.filter(user=logged_user,followed_user=other_user).first()
                if object:
                    return True
                return False
        return None



class PostLikeCommentCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = PostDetail
        fields = '__all__'


class PostDetailSerializer(serializers.ModelSerializer):
    post_detail = PostLikeCommentSerializer(many=True, read_only=True)
    user = UserSerializer(read_only=True)
    liked_by = serializers.SerializerMethodField('get_liked_by')
    follow_request_sent = serializers.SerializerMethodField('check_Followrequest_sent')
    followed_status = serializers.SerializerMethodField('getFollowedStatus')
    like_by_you = serializers.SerializerMethodField('check_post_like_by_user')

    class Meta:
        model = Post
        fields = ['id', 'file', 'post_info','user', 'post_time_stamp', 'post_detail','liked_by','like_by_you','follow_request_sent','followed_status']

    def get_liked_by(self, obj):
        if obj:
            post = Post.objects.filter(id=obj.id).first()
            list_liked_post = PostDetail.objects.filter(post=post, like=True)
            user_liked_post_list = []
            for comment_post in list_liked_post:
                user_liked_post_list.append(comment_post.user.username)
            if len(user_liked_post_list) == 0:
                return None
            else:
                return user_liked_post_list
        return None

    def check_Followrequest_sent(self,obj):
        if obj:
            user = obj.user
            request = self.context.get("request")
            if request and hasattr(request, "user"):
                instance = Notification.objects.filter(user=user,other_user=request.user,notification_type="follow")
                if instance:
                    return True
                return False
            return None

        return None

    def check_post_like_by_user(self,obj):
        if obj:
            post = Post.objects.filter(id=obj.id).first()
            request = self.context.get("request")
            if request and hasattr(request, "user"):
                user = request.user
                instance = PostDetail.objects.filter(post=post, like=True,user=user)
                if instance:
                    return True
            return False
        return None

    def getFollowedStatus(self,obj):
        if obj:
            request = self.context.get("request")
            if request and hasattr(request, "user"):
                logged_user = request.user
                other_user = obj.user
                object = Follower.objects.filter(user=logged_user,followed_user=other_user).first()
                if object:
                    return True
                return False
        return None




