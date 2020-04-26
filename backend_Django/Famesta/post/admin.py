from django.contrib import admin

# Register your models here.
from .models import Post,PostDetail

admin.site.register(Post)
admin.site.register(PostDetail)

