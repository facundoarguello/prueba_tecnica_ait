# Generated by Django 3.0.8 on 2024-10-06 02:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20240304_0017'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='articulo',
            options={'ordering': ['datecreate']},
        ),
    ]
