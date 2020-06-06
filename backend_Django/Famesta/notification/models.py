from django.db import models
from django.utils import timezone
# Create your models here.
from django.utils.translation import gettext_lazy as _
from user.models import User
from post.models import Post


class Notification(models.Model):
    message = models.CharField(_('message'), max_length=300, null=True, blank=True)
    seen = models.BooleanField(_('seen'), default=False)

    notification_type_choice = (
        ('follow', 'follow'),
        ('unfollow', 'unfollow'),
        ('like', 'like'),
        ('comment', 'comment'),
        ('request_accepted','request_accepted')
    )
    notification_type = models.CharField(_('notification_type'),max_length=300, choices=notification_type_choice,null=False)
    user = models.ForeignKey(User,related_name="notification_user",on_delete=models.CASCADE)
    post = models.ForeignKey(Post,related_name="post", on_delete=models.CASCADE,null=True)
    other_user = models.ForeignKey(User,related_name="notification_other_user", on_delete=models.CASCADE,null=True)
    timestamp = models.DateTimeField(_('timestamp'), default=timezone.now)

    def __str__(self):
        if self.notification_type == "like" or self.notification_type == "comment":
            return self.user.username+" -> "+str(self.id)
        else:
            return self.user.username + " -> "+str(self.id)