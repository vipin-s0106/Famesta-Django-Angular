from abc import ABC

from rest_framework import serializers

from user.serializer import UserSerializer
from post.serializer import PostSerializer

from .models import Notification


class NotificationCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'


class NotificationSerializer(serializers.ModelSerializer):
    post = PostSerializer(read_only=True)
    other_user = UserSerializer(read_only=True)

    class Meta:
        model = Notification
        fields = ['id','message','seen','notification_type','other_user','post','user','timestamp']
