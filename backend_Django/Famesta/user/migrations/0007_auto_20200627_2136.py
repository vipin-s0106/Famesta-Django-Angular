# Generated by Django 3.0.4 on 2020-06-27 16:06

from django.db import migrations, models
import user.models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0006_auto_20200613_0026'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='profile_picture',
            field=models.ImageField(blank=True, default='user.png', max_length=500, null=True, upload_to=user.models.upload_user_profile_path, verbose_name='profile_picture'),
        ),
    ]
