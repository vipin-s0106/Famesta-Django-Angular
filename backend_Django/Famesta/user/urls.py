from django.urls import path
from django.conf.urls import url
from . import views
from rest_framework_simplejwt import views as jwt_views

app_name = 'user'

urlpatterns = [
   url('^api/login/$',views.Login.as_view() , name="api_login"),
   url('^api/token/refresh/$',jwt_views.TokenRefreshView.as_view(), name='refresh_token'),
   url('^api/logout/$',views.user_logout,name='api_logout'),
   url('^api/register/$',views.UserCreation.as_view(),name='user_register'),
   url('^api/loggedUser/$',views.getLoggedUser,name='getLoggedUser'),
   url('^api/user/(?P<id>[0-9]+)/$',views.UserAction.as_view(),name='user_action'),
   url('^api/user/(?P<id>[0-9]+)/profile/$',views.UserProfileAction.as_view(),name='user_profile_action'),
   url('^api/otheruser/(?P<username>[\w]+)/$',views.OtherUserProfileAPIView.as_view(),name="other_user_profile"),
   url('^api/search_user/filter/(?P<filter_value>[\w\s]+)/$',views.SearchUser,name="search user"),
   url('^api/set_new_password/$',views.setNewPassword,name="set_new_password"),
   url('^api/send_forgot_pwd_mail/$',views.sendForgotPasswordMail,name="send_forgot_password_mail"),
   url('^api/verify_mailSecretKey/$',views.verifyMailSecretKey,name="verify_mailSecretKey"),
   url('^api/setForgotPasswordWithNewPwd/$',views.setForgotPasswordWithNewPassword,name="setForgotPasswordWithNewPassword"),
   url('^api/send_contact_mail/$',views.sendContactMail,name="sendContactMail"),
]
