# Generated by Django 3.0.4 on 2020-06-12 18:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0005_auto_20200606_1757'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chatmessage',
            name='image',
            field=models.FileField(blank=True, max_length=500, null=True, upload_to='', verbose_name='image'),
        ),
    ]