from django.urls import path
from django.conf.urls import url
from . import views

app_name = 'notification'

urlpatterns = [
    url('^api/notification/follow/(?P<user_id>[0-9]+)/$',views.NotificationFollowRequestCreateView().as_view(),name="create_notification"),
	url('^api/notification/(?P<user_id>[0-9]+)/$',views.NotificationAPIView().as_view(),name="get_user_notification"),
	url('^api/notification/(?P<notification_id>[0-9]+)/$',views.NotificationAPIView().as_view(),name="get_notification_by_id"),
	url('^api/notification/update_seen/(?P<notification_id>[0-9]+)/$',views.NotificationAPIView().as_view(),name="update_notification"),
	url('^api/notification/delete/(?P<notification_id>[0-9]+)/$',views.NotificationAPIView().as_view(),name="delete_notification"),
	url('^api/notification/delete_all/(?P<user_id>[0-9]+)/$',views.delete_all_notification,name="deleteall_notification"),
]
