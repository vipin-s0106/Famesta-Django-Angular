# Generated by Django 3.0.4 on 2020-04-28 17:16

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('followers', '0002_auto_20200428_2149'),
    ]

    operations = [
        migrations.AlterField(
            model_name='follower',
            name='timestamp',
            field=models.DateTimeField(default=django.utils.timezone.now, null=True, verbose_name='timestamp'),
        ),
    ]
