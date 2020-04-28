from django.urls import path
from django.conf.urls import url
from . import views
from rest_framework_simplejwt import views as jwt_views

app_name = 'user'

urlpatterns = [
   url('^api/login/$',views.Login.as_view() , name="api_login"),
   url('^api/token/refresh/$',jwt_views.TokenRefreshView.as_view(), name='refresh_token'),
   url('^api/logout/$',views.logout,name='api_logout'),
   url('^api/register/$',views.UserCreation.as_view(),name='user_register'),
   url('^api/user/(?P<id>[0-9]+)/$',views.UserAction.as_view(),name='user_action'),
   url('^api/user/(?P<id>[0-9]+)/profile/$',views.UserProfileAction.as_view(),name='user_profile_action'),

]
