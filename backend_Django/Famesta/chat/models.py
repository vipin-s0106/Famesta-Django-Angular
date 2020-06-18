from django.db import models
from user.models import User
from django.utils import timezone

from django.utils.translation import gettext_lazy as _


def upload_user_chat_img_gif(instance, filename):
    return "chat/sender_{0}_receiver_{1}/{2}".format(instance.sender, instance.receiver, filename)


# Create your models here.

class ChatUser(models.Model):
    user = models.ForeignKey(User, related_name="chat_user", on_delete=models.CASCADE)
    other_user = models.ForeignKey(User, related_name="chat_other_user", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(_('timestamp'), default=timezone.now)
    unseen_message_count = models.IntegerField(_('unseen_message_count'), default=0)

    def __str__(self):
        return str(self.user) + "     " + str(self.other_user)


class ChatMessage(models.Model):
    sender = models.CharField(_('sender'), max_length=350, null=False)
    receiver = models.CharField(_('receiver'), max_length=350, null=False)
    message = models.CharField(_("message"), max_length=450, null=True)
    image = models.FileField(_("image"), null=True, blank=True, max_length=500,upload_to=upload_user_chat_img_gif)
    timestamp = models.DateTimeField(_('timestamp'), default=timezone.now)
    seen = models.BooleanField(_("seen"), default=False)

    def __str__(self):
        return str(self.sender) + "  " + str(self.receiver) + "  " + str(self.message)
