from rest_framework import serializers
from user.serializer import UserSerializer
from .models import ChatUser,ChatMessage


class PostChatUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatUser
        fields = '__all__'


class ChatUserSerializer(serializers.ModelSerializer):
    other_user = UserSerializer(read_only=True)

    class Meta:
        model = ChatUser
        fields = ['id','user','other_user','timestamp','unseen_message_count']


class ChatMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatMessage
        fields = '__all__'