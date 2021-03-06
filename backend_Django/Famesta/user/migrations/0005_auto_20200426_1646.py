# Generated by Django 3.0.4 on 2020-04-26 11:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import user.models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0004_auto_20200426_1102'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='background_picture',
            field=models.ImageField(blank=True, null=True, upload_to=user.models.upload_user_profile_path, verbose_name='background_picture'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='gender',
            field=models.CharField(blank=True, choices=[('M', 'Male'), ('F', 'Female')], max_length=10, null=True, verbose_name='gender'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='profile_picture',
            field=models.ImageField(blank=True, null=True, upload_to=user.models.upload_user_profile_path, verbose_name='profile_picture'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL),
        ),
    ]
