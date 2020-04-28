from rest_framework import serializers

from .models import Follower

from user.serializer import UserSerializer


# importing other serializer

class FollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follower
        fields = '__all__'


class FollowerSerializer(serializers.HyperlinkedModelSerializer):
    followed_user = UserSerializer(read_only=True)

    class Meta:
        model = Follower
        fields = ['id', 'block_Status', 'followed_user']


class FollowingSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    following_username = serializers.SerializerMethodField('get_username')
    class Meta:
        model = Follower
        fields = ['id', 'user', 'following_username']

    def get_username(self,obj):
        if obj:
            return obj.followed_user.username

