from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers

from .models import PostDetail, Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class PostListSerializer(serializers.ModelSerializer):
    # total_comments = serializers.IntegerField()
    # liked_by = serializers.ListField()

    class Meta:
        model = Post
        fields = ['id', 'file', 'post_info', 'post_time_stamp'
                  # 'total_comments',
                  # 'liked_by'
                  ]


class PostCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostDetail
        fields = '__all__'


class PostDetailSerializer(serializers.ModelSerializer):
    post_detail = PostCommentSerializer(many=True,read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'file', 'post_info', 'post_time_stamp', 'post_detail']
