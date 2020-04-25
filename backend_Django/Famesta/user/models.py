from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _

# Create your models here.

class User(AbstractUser):
    email = models.EmailField(_('email'),unique=True,blank=False)
    mobile = models.IntegerField(_('mobile'),null=True)
    status = models.BooleanField(_('status'),default=False)
    profile_picture = models.ImageField(_('profile'),null=True,blank=True)
    BioDescription = models.CharField(_('bio'),max_length=300,null=True,blank=True)
    date_of_birth = models.DateField(_('dob'),null=True,blank=False)
    gender_choice =(
        ('M','Male'),
        ('F','Female'),
    )

    gender = models.CharField(_('gender'),max_length=10,choices=gender_choice,null=False)

    def __str__(self):
        return self.username

