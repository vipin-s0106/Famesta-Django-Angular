from django.urls import path
from django.conf.urls import url
from . import views

app_name = 'followers'

urlpatterns = [
	url('^api/followers/suggestion/(?P<user_id>[0-9]+)/$',views.GetSuggestion().as_view(),name="get_suggestion"),
	url('^api/followers/accept_request/(?P<user_id>[0-9]+)/(?P<other_user_id>[0-9]+)/$',views.AcceptFollowRequest().as_view(),name="accept_follow_request"),
	url('^api/followers/unfollow_user/(?P<user_id>[0-9]+)/(?P<other_user_id>[0-9]+)/$',views.UnfollowUser().as_view(),name="unfollow_request"),
	url('^api/followers/get_followers/(?P<user_id>[0-9]+)/$',views.GetUserFollowers().as_view(),name="get_followers"),
	url('^api/followers/get_followings/(?P<user_id>[0-9]+)/$',views.GetUserFollowings().as_view(),name="get_followings"),
	url('^api/followers/blocked_user/(?P<user_id>[0-9]+)/(?P<other_user_id>[0-9]+)/$',views.BlockedUser().as_view(),name="blocked_user"),
	url('^api/followers/unblocked_user/(?P<user_id>[0-9]+)/(?P<other_user_id>[0-9]+)/$',views.UnblockedUser().as_view(),name="unblocked_user"),
]
