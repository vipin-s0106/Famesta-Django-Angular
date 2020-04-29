from django.urls import path
from django.conf.urls import url
from . import views

app_name = 'notification'

urlpatterns = [
	url('^api/notification/(?P<user_id>[0-9]+)/$',views.NotificationAPIView().as_view(),name="notification"),
	url('^api/notification/(?P<notification_id>[0-9]+)/$',views.NotificationAPIView().as_view(),name="notification"),
	url('^api/notification/update_seen/(?P<notification_id>[0-9]+)/$',views.NotificationAPIView().as_view(),name="notification"),
	url('^api/notification/delete/(?P<notification_id>[0-9]+)/$',views.NotificationAPIView().as_view(),name="notification"),
	url('^api/notification/delete_all/(?P<user_id>[0-9]+)/$',views.delete_all_notification,name="delete_notification"),
]
