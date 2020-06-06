from django.urls import path
from django.conf.urls import url
from . import views

app_name = 'chat'

urlpatterns = [
   url('^api/chat/create_chat_instance/(?P<other_username>[\w0-9]+)/$',views.CreateUserChatInstance.as_view(), name="create_user_chat_instance"), #completed
   url('^api/chat/update_unseen_msg_count/(?P<other_username>[\w0-9]+)/$',views.CreateUserChatInstance.as_view(), name="update_unseen_msg_count"), #completed
   url('^api/chat/reset_unseen_msg_count/(?P<other_username>[\w0-9]+)/$',views.reset_unseen_notification_count, name="reset_unseen_msg_count"), #completed
   url('^api/chat/get_chat_instance/$',views.ChatUserInstance.as_view(), name="get_user_chat_instance"), #completed
   url('^api/chat/post_chat_message/(?P<other_username>[\w0-9]+)/$',views.PostUserMessage.as_view(), name="post_user_message"),#completed
   url('^api/chat/get_chat_messages/(?P<other_username>[\w0-9]+)/$',views.ChatMessageView.as_view(), name="get_user_message"), #completed
   url('^api/chat/update_chat_seen/(?P<chat_id>[0-9]+)/$',views.update_MsgSeen_Status, name="update_msg_seen"), #completed
   url('^api/chat/delete_chat_instance/(?P<other_userid>[0-9]+)/$',views.DeleteChatUserInstance.as_view(), name="delete_user_chat_instance"), #completed
   url('^api/chat/delete_chat_messages/(?P<other_username>[\w0-9]+)/$',views.ChatMessageView.as_view(), name="delete_user_message"), #completed
]