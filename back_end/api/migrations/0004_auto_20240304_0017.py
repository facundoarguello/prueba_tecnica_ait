# Generated by Django 3.0.8 on 2024-03-04 00:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20240303_2328'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articulo',
            name='strprice',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
