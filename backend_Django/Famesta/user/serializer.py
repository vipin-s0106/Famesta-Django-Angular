from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import login

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        # data['user_id'] = str(self.user.id)

        return data