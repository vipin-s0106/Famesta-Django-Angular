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
from .serializer import RegisterSerializer
from .exception import UserExistException
from .models import User
# Create your views here.


#Login to the application
class Login(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_logout(request):
    '''
    An implementation would probably be, to store a so called “blacklist” of all the tokens that are valid no more
    and have not expired yet. You can use a DB that has TTL option on documents which would be set to the amount of
    time left until the token is expired. Redis is a good option for this, that will allow fast in memory access to the list.
    Then, in a middleware of some kind that runs on every authorized request, you should check if provided token is in The Blacklist.
    If it is you should throw an unauthorized error. And if it is not, let it go and the JWT verification will handle it and
    identify if it is expired or still active.
    '''
    logout(request)
    return Response({"message":"user has been successfull logout"})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def hello(request):
    print(request.headers)
    return HttpResponse(request.user.username)

class HelloView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)


"Defining our Own Exception"
class ExistUserException(Exception):
    pass



class UserCreation(APIView):

    def post(self,request):
        user_data = request.data
        serializer = RegisterSerializer(data=user_data)

        username = user_data.get('username')
        email = user_data.get('email')
        user = User.objects.filter(username=username).first()
        email_user  = User.objects.filter(email=email).first()

        try:
            if user is not None:
                raise UserExistException(username+" already exist, try with other username!")
            if email_user is not None:
                raise UserExistException(email+" already registered with us")

            if serializer.is_valid():
                instance = serializer.create(serializer.validated_data)
                if instance is None:
                    return Exception("Some Error Occurred Please contact Support team")
                #here try to remove the password field from serializer.data it's return type is ReturnSerializer

                return Response(serializer.data,status=201) #201 for new User creation
            else:
                raise Exception(serializer.error_messages)
        except UserExistException as e:
            return Response({"error":str(e)},status=400)  #400 is for bad request
        except Exception as e:
            return Response({"error":str(e)},status=400)
