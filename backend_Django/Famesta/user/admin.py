from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User


# make Framework to use Custom user Model For to store Admin Detail to Databases
class CustomUserAdmin(UserAdmin):
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('gender',),
        }),
    )
    model = User
    list_display = ['username', 'password', 'email', 'is_staff','gender','status']


admin.site.register(User, CustomUserAdmin)

