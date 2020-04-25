from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User


# make Framework to use Custom user Model For to store Admin Detail to Databases
class CustomUserAdmin(UserAdmin):
    model = User
    list_display = ['username', 'password', 'email', 'is_staff','gender','status','profile_picture']
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'password1', 'password2','profile_picture','gender'),
        }),
    )


admin.site.register(User, CustomUserAdmin)

