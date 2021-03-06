# Generated by Django 3.0.4 on 2020-04-26 05:32

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_auto_20200424_2106'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='BioDescription',
        ),
        migrations.RemoveField(
            model_name='user',
            name='date_of_birth',
        ),
        migrations.RemoveField(
            model_name='user',
            name='gender',
        ),
        migrations.RemoveField(
            model_name='user',
            name='mobile',
        ),
        migrations.RemoveField(
            model_name='user',
            name='profile_picture',
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=200, null=True, verbose_name='full_name')),
                ('mobile', models.IntegerField(null=True, verbose_name='mobile')),
                ('profile_picture', models.ImageField(blank=True, null=True, upload_to='', verbose_name='profile')),
                ('BioDescription', models.CharField(blank=True, max_length=300, null=True, verbose_name='bio')),
                ('date_of_birth', models.DateField(blank=True, null=True, verbose_name='dob')),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=10, null=True, verbose_name='gender')),
                ('account_type', models.CharField(choices=[('Public', 'Public'), ('Private', 'Private')], default='Public', max_length=50, verbose_name='account_type')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
