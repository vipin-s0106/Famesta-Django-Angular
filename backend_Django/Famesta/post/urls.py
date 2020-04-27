from django.urls import path
from django.conf.urls import url
from . import views

app_name = 'post'

urlpatterns = [
    url('^api/post_story/(?P<user_id>[0-9]+)/$',views.PostStoryCreateView.as_view(),name="create_story"),
    url('^api/list_story/(?P<user_id>[0-9]+)/$',views.PostStoryListView.as_view(),name="list_stories"),#not working
    url('^api/story/(?P<post_id>[0-9]+)/$',views.PostStoryDetailView.as_view(),name="story_detail"),
    url('^api/story_comment/(?P<post_id>[0-9]+)/$',views.ListCommentView.as_view(),name="story_comments"),
    url('^api/post_comment/(?P<user_id>[0-9]+)/(?P<post_id>[0-9]+)/$',views.CommentCreateView.as_view(),name="post_comment"),
    url('^api/delete_comment/(?P<user_id>[0-9]+)/(?P<comment_id>[0-9]+)/$',views.CommentDeleteView.as_view(),name="delete_comment"),
    url('^api/like_post/(?P<user_id>[0-9]+)/(?P<post_id>[0-9]+)/$',views.LikeCreateView.as_view(),name="like_post"),
]
