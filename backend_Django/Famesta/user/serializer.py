from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import login
from rest_framework import serializers
from .models import User
from django.contrib.auth.hashers import make_password

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        data['user_id'] = str(self.user.id)

        return data

class RegisterSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = [
            'username',
            'password',
            'first_name',
            'email',
            'profile_picture',
            'gender'
        ]

    extra_kwargs = {
        'password': {'write_only': True}
    }

    def create(self, validated_data):
        password = validated_data.get('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

