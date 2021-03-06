# Generated by Django 3.0.4 on 2020-06-05 15:16

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chatmessage',
            name='timestamp',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='timestamp'),
        ),
        migrations.AlterField(
            model_name='chatuser',
            name='timestamp',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='timestamp'),
        ),
    ]
