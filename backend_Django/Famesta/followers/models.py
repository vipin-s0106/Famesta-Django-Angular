from django.db import models
from user.models import User
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

# Create your models here.
class Follower(models.Model):
	user = models.ForeignKey(User,related_name='follower_user',on_delete=models.CASCADE)
	followed_user = models.ForeignKey(User,related_name='followed_user',on_delete=models.CASCADE)
	block_Status = models.BooleanField(_('block_status'),default=False)
	timestamp = models.DateTimeField(_('timestamp'),default=timezone.now,null=True)

	def __str__(self):
		return self.user.username+"- > "+self.followed_user.username