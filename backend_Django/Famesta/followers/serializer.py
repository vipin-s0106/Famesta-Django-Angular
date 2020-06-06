from rest_framework import serializers

from .models import Follower

from user.serializer import UserSerializer
from notification.models import Notification


# importing other serializer

class FollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follower
        fields = '__all__'


class FollowerSerializer(serializers.HyperlinkedModelSerializer):
    user = UserSerializer(read_only=True)
    follow_request_sent = serializers.SerializerMethodField('check_Followrequest_sent')
    followed_status = serializers.SerializerMethodField('getFollowedStatus')

    class Meta:
        model = Follower
        fields = ['id', 'block_Status', 'user','follow_request_sent','followed_status']

    def check_Followrequest_sent(self,obj):
        if obj:
            user = obj.user
            request = self.context.get("request")
            if request and hasattr(request, "user"):
                instance = Notification.objects.filter(user=user,other_user=request.user,notification_type="follow").first()
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


class FollowingSerializer(serializers.ModelSerializer):
    followed_user = UserSerializer(read_only=True)
    following_username = serializers.SerializerMethodField('get_username')
    follow_request_sent = serializers.SerializerMethodField('check_Followrequest_sent')
    followed_status = serializers.SerializerMethodField('getFollowedStatus')


    class Meta:
        model = Follower
        fields = ['id', 'followed_user', 'following_username','follow_request_sent','followed_status']

    def get_username(self,obj):
        if obj:
            return obj.user.username

    def check_Followrequest_sent(self,obj):
        if obj:
            user = obj.followed_user
            request = self.context.get("request")
            if request and hasattr(request, "user"):
                instance = Notification.objects.filter(user=user,other_user=request.user,notification_type="follow").first()
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
                other_user = obj.followed_user
                object = Follower.objects.filter(user=logged_user,followed_user=other_user).first()
                if object:
                    return True
                return False
        return None



class FollowStatusSerializer(serializers.Serializer):
    follow_request_sent = serializers.NullBooleanField()
    followed_status = serializers.NullBooleanField()

    class Meta:
        fields = ['follow_request_sent','followed_status']

