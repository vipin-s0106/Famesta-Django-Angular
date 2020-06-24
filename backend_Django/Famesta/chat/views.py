from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import permission_classes,api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from user.models import User
from .models import ChatMessage,ChatUser
from  django.db.models import Q

from .serializer import PostChatUserSerializer,ChatMessageSerializer,ChatUserSerializer

from django.core.cache import cache
from django.conf import settings

class CreateUserChatInstance(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self,request,other_username):
        logged_user_id = request.user.id
        other_userid = User.objects.get(username=other_username).id
        data = {
            'user':logged_user_id,
            'other_user':other_userid
        }
        # print(data)
        instance = ChatUser.objects.filter(user=logged_user_id,other_user=other_userid).first()
        if instance is None:
            serializer = PostChatUserSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=201)
            else:
                return Response(serializer.error_messages,status=400)
        else:
            return Response({"msg":"you have already started chat with the user"},status=200)

    def put(self,request,other_username):
        logged_user_id = request.user.id
        other_userid = User.objects.get(username=other_username).id
        data = {
            'user': logged_user_id,
            'other_user': other_userid,
        }
        instance = ChatUser.objects.filter(user=logged_user_id, other_user=other_userid).first()
        data['unseen_message_count'] = instance.unseen_message_count + 1
        # print(data)
        serializer = PostChatUserSerializer(instance,data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=200)
        else:
            return Response(serializer.error_messages,status=400)

@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def reset_unseen_notification_count(request,other_username):
    logged_user_id = request.user.id
    other_userid = User.objects.get(username=other_username).id
    data = {
        'user': logged_user_id,
        'other_user': other_userid,
    }
    instance = ChatUser.objects.filter(user=logged_user_id, other_user=other_userid).first()
    data['unseen_message_count'] = 0
    # print(data)
    serializer = PostChatUserSerializer(instance, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=200)
    else:
        return Response(serializer.error_messages, status=400)


class ChatUserInstance(APIView):
    permission_classes = (IsAuthenticated,)

    def get_object(self,user_id):
        instances = ChatUser.objects.filter(user=user_id)
        return instances

    def get(self,request):
        instances = self.get_object(request.user.id)
        if instances is not None:
            serializer_context = {'request':request}
            serializer = ChatUserSerializer(instances,many=True,context=serializer_context)
            return Response(serializer.data,status=200)
        return Response({"msg":"User Chat Instance Not found"},status=404)


class DeleteChatUserInstance(APIView):
    permission_classes = (IsAuthenticated,)
    def delete(self,request,other_userid):
        instance = ChatUser.objects.get(user=request.user.id,other_user=other_userid)
        instance.delete()
        return Response(status=200)


class PostUserMessage(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self,request,other_username):
        #setting the current chat window
        cache.set('chat_window_%s' % (request.user.username), other_username,
                  settings.USER_CHAT_WINDOW_TIMEOUT)



        data = request.data
        logged_user_id = request.user.id
        other_userid = User.objects.get(username=other_username).id

        #here creating the instance of other user he don't have your chat window
        instance = ChatUser.objects.filter(user=other_userid, other_user=logged_user_id).first()
        if instance is None:
            data1 = {
                'user': other_userid,
                'other_user': logged_user_id
            }
            serializer = PostChatUserSerializer(data=data1)
            if serializer.is_valid():
                serializer.save()

                ####################################################################
                # check if user on other chat window then update the unseen_msg_count
                other_user_object = User.objects.get(username=other_username)
                instance = ChatUser.objects.filter(user=other_userid, other_user=logged_user_id).first()
                unseen_data = {
                    'user': other_userid,
                    'other_user': logged_user_id,
                    "unseen_message_count": instance.unseen_message_count + 1
                }
                unseen_serializer = PostChatUserSerializer(instance,data=unseen_data,partial=True)
                if other_user_object.online():
                    # print(cache.get('chat_window_%s' % (other_username)))
                    if str(cache.get('chat_window_%s' % (other_username))) != str(request.user.username):
                        if unseen_serializer.is_valid():
                            unseen_serializer.save()
                else:
                    # print(other_user_object.online())

                    if unseen_serializer.is_valid():
                        unseen_serializer.save()

                ####################################################################


            else:
                return Response({"error":"Not able to create the chat window of other user"}, status=400)
        else:
            ####################################################################
            # check if user on other chat window then update the unseen_msg_count
            other_user_object = User.objects.get(username=other_username)
            # instance = ChatUser.objects.filter(user=other_userid, other_user=logged_user_id).first()
            unseen_data = {
                'user': other_userid,
                'other_user': logged_user_id,
                "unseen_message_count": instance.unseen_message_count + 1
            }
            # print(unseen_data)
            unseen_serializer = PostChatUserSerializer(instance,data=unseen_data,partial=True)
            if other_user_object.online():
                # print(cache.get('chat_window_%s' % (other_username)))
                if str(cache.get('chat_window_%s' % (other_username))) != str(request.user.username):
                    if unseen_serializer.is_valid():
                        unseen_serializer.save()
            else:
                # print(other_user_object.online())
                if unseen_serializer.is_valid():
                    unseen_serializer.save()
                else:
                    print(unseen_serializer.error_messages)

            ####################################################################
        _mutable = data._mutable
        #
        # # set to mutable
        data._mutable = True
        #
        # # сhange the values you want
        data['sender'] = request.user.username
        data['receiver'] = other_username

        # if other user is on your chat window then make msg as seen
        if str(cache.get('chat_window_%s' % (other_username))) == str(request.user.username):
            data["seen"] = True
        #
        # # set mutable flag back
        data._mutable = _mutable

        print(data)
        serializer = ChatMessageSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        else:
            return Response(serializer.error_messages,status=400)



class ChatMessageView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self,request,other_username):
        #setting the current user chat windows

        cache.set('chat_window_%s' % (request.user.username), other_username,
                  settings.USER_CHAT_WINDOW_TIMEOUT)

        ##############################################################
        #Setting the unseen msg count zero for this user
        other_user_object = User.objects.get(username=other_username)
        instance = ChatUser.objects.filter(user=request.user.id, other_user=other_user_object.id).first()
        if instance.unseen_message_count > 0:
            unseen_data = {
                'user': request.user.id,
                'other_user': other_user_object.id,
                "unseen_message_count": 0
            }
            unseen_serializer = PostChatUserSerializer(instance,data=unseen_data,partial=True)
            if unseen_serializer.is_valid():
                unseen_serializer.save()
        ##############################################################


        logged_username = request.user.username
        chat_messages = ChatMessage.objects.filter(Q(sender=logged_username,receiver=other_username) |
                                                   Q(sender=other_username,receiver=logged_username)).order_by('timestamp')

        ##############################################################################
        # if user going to see the msg of other user then make update of seen of msgs
        if other_user_object.online() and cache.get('chat_window_%s' % (other_username)) == request.user.username:
            for msg in chat_messages[::-1]:
                # print(msg)
                if msg.seen == True and msg.sender == other_username:
                    break
                elif msg.sender == other_username:
                    chat = ChatMessage.objects.get(id=msg.id)
                    data = {"seen": True}
                    serializer = ChatMessageSerializer(chat, data=data, partial=True)
                    if serializer.is_valid():
                        serializer.save()
        ###############################################################################

        serializer = ChatMessageSerializer(chat_messages,many=True,context={'request':request})
        return Response(serializer.data,status=200)

    def delete(self,request,other_username):
        logged_username = request.user.username
        chat_messages = ChatMessage.objects.filter(Q(sender=logged_username, receiver=other_username) | Q(sender=other_username, receiver=logged_username))
        for chat in chat_messages:
            chat.delete()
        return Response(status=200)

@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def update_MsgSeen_Status(request,chat_id):
    data = {"seen":True}
    instance = ChatMessage.objects.get(id=chat_id)
    serializer = ChatMessageSerializer(instance,data=data,partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=201)
    return Response(serializer.error_messages,status=400)






