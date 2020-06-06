from django.contrib import admin

# Register your models here.
from .models import ChatUser,ChatMessage

admin.site.register(ChatUser)
admin.site.register(ChatMessage)
