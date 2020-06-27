from django.db import models
from django.utils import timezone

from django.utils.translation import gettext_lazy as _
from user.models import User


def upload_user_post_path(instance, filename):
    return "user_{0}/post/{1}".format(instance.user.id, filename)


class Post(models.Model):
    file = models.FileField(_('file'), null=False, blank=False,max_length=500, upload_to=upload_user_post_path)
    post_info = models.CharField(_('post_info'), max_length=300, null=True, blank=True)
    post_time_stamp = models.DateTimeField(_('post_time_stamp'), default=timezone.now)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return "postID:"+str(self.id)+" "+str(self.post_info)

class PostDetail(models.Model):
    comment = models.CharField(_('comment'),max_length=500,null=True,blank=True)
    like = models.BooleanField(_('like'),null=True,blank=True)
    post_action_timestamp = models.DateTimeField(_('post_action_timestamp'), default=timezone.now)
    user = models.ForeignKey(User,related_name='user', on_delete=models.CASCADE)
    post = models.ForeignKey(Post,related_name='post_detail',on_delete=models.CASCADE)

    def __str__(self):
        return "PostID:"+str(self.post.id)+" UserID:"+str(self.user.id)+" Comment: "+str(self.comment) + " Like: "+str(self.like)


