from django.contrib.auth import logout,login
from django.shortcuts import render,HttpResponse
from rest_framework.response import Response

from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView

#importing the Decorators
from rest_framework.decorators import api_view,permission_classes,authentication_classes

#importing permissions and authentication
from rest_framework.permissions import IsAuthenticated

#importing Serializer
from .serializer import RegisterSerializer
from.serializer import CustomTokenObtainPairSerializer,UserSerializer,ProfileSerializer

#importing Custom Exception
from .exception import UserExistException,UserDoesNotExist

#importing models
from .models import User,UserProfile
from followers.models import Follower


from django.db.models import Q



#Login to the application
class Login(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


@api_view(['POST'])
#@permission_classes([IsAuthenticated])
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
def getLoggedUser(request):
    user = request.user
    # print(user)
    serializer = UserSerializer(user)
    return Response(serializer.data)

class HelloView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)



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

                user = User.objects.filter(id=instance.id).first()
                serializer = UserSerializer(user)

                return Response(serializer.data,status=201) #201 for new User creation
            else:
                raise Exception(serializer.error_messages)
        except UserExistException as e:
            return Response({"error":str(e)},status=400)  #400 is for bad request
        except Exception as e:
            return Response({"error":str(e)},status=400)


class UserAction(APIView):

    def get_object(self,id):
        user = User.objects.filter(id=id).first()
        return user

    def get(self,request,id=None):
        user = self.get_object(id)
        if user is None:
            return Response({"error":"Given user_id - "+str(id)+" user object not found"},status=404)
        serializer = UserSerializer(user)
        return Response(serializer.data,status=200)

    def put(self,request,id=None):
        user = self.get_object(id)
        if user is None:
            return Response({"error":"Given user_id - "+str(id)+" user object not found"},status=404)
        serializer = UserSerializer(user,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=200)
        return Response(serializer.errors, status=400)

    def delete(self,request,id=None):
        user = self.get_object(id)
        if user is None:
            return Response({"error":"Given user_id - "+str(id)+" user object not found"},status=404)
        user.delete()
        return Response(status=200)

class UserProfileAction(APIView):

    def get_object(self,id):
        user = User.objects.filter(id=id).first()
        print(user)
        if user is None:
            return None
        else:
            user_profile = UserProfile.objects.get(user=user)
            return user_profile

    def get(self,request,id=None):
        user_profile = self.get_object(id)
        if user_profile is None:
            return Response({"error":"Given user_id - "+str(id)+" user profile not found"},status=404)
        serializer = ProfileSerializer(user_profile)
        return Response(serializer.data,status=200)

    def put(self,request,id=None):
        user_profile = self.get_object(id)
        if user_profile is None:
            return Response({"error":"Given user_id - "+str(id)+" user profile not found"},status=404)
        serializer = ProfileSerializer(user_profile,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=200)
        return Response(serializer.errors, status=400)


class OtherUserProfileAPIView(APIView):
    def get_object(self,username):
        user = User.objects.filter(username=username).first()
        return user

    def get(self,request,username):
        user = self.get_object(username)
        user_profile = UserProfile.objects.filter(user=user).first()
        if user is None:
            return Response({"error":"Given username - "+str(username)+" user object not found"},status=404)
        serializer_context = {
            'request': request,
        }
        object = Follower.objects.filter(user=request.user, followed_user=user).first()
        if object:
            serializer = UserSerializer(user)
            return Response(serializer.data, status=200)
        else:
            # if user_profile.account_type == "Private":
            #     return Response({"message":user.username+" account is private"},status=200)
            # else:
            serializer = UserSerializer(user)
            return Response(serializer.data, status=200)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def SearchUser(request,filter_value):
    users = User.objects.filter(Q(profile__full_name__icontains=filter_value) | Q(username__icontains=filter_value))
    serializer = UserSerializer(users,many=True)
    return Response(serializer.data, status=200)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def setNewPassword(request):
    data = request.data
    user = request.user
    if user is not None:
        if user.check_password(data['password']):
            user.set_password(data['new_password'])
            #print(user.password)
            user.save()
            return Response(200)
        else:
            return Response({"error": "Wrong password, please try again"}, status=400)
    else:
        return Response({"error": "Something went wrong, please try again after sometime"}, status=404)










