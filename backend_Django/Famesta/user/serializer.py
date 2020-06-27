from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers

from .models import User, UserProfile
from notification.models import Notification
from followers.models import Follower


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        data['user_id'] = str(self.user.id)

        return data


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'


class RegisterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = [
            'username',
            'password',
            'email'
        ]

    def create(self, validated_data):
        password = validated_data.get('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class UserSerializer(serializers.ModelSerializer):
    #In order to embed the one profile into other define the related_name='profile' in model of Child Table, name should be match
    profile = ProfileSerializer(read_only=True)
    status = serializers.SerializerMethodField('get_user_online_status')

    class Meta:
        model = User
        fields = ["id", "username", "email", "status", 'profile', "last_login", "is_superuser", "is_staff", "is_active",
                  "date_joined"]
        extra_kwargs = {
            'id': {'read_only': True},
            'profile': {'read_only': True},
            'last_login': {'read_only': True},
            'is_superuser': {'read_only': True},
            'is_staff': {'read_only': True},
            'is_active': {'read_only': True},
            'date_joined': {'read_only': True},
        }

    def get_user_online_status(self,usr_obj):
        if usr_obj:
            return usr_obj.online()
        return False



