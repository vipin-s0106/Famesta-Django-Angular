from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.decorators import api_view,permission_classes,authentication_classes
from rest_framework_simplejwt.views import TokenObtainPairView
from.serializer import CustomTokenObtainPairSerializer
from django.contrib.auth import logout,login
from django.shortcuts import render,HttpResponse
# Create your views here.


class HelloView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)

#Login to the application
class Login(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_logout(request):
    print(request)
    logout(request)
    return Response({"message":"user has been successfull logout"})




@api_view(['GET'])
@permission_classes([IsAuthenticated])
def hello(request):
    print(request.headers)
    return HttpResponse(request.user.username)

