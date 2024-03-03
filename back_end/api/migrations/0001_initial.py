# Generated by Django 3.0.8 on 2024-03-03 22:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Articulos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=200)),
                ('code', models.CharField(max_length=30)),
                ('coin', models.CharField(max_length=6)),
                ('price', models.FloatField()),
                ('strprice', models.CharField(max_length=20)),
                ('datecreate', models.DateField(auto_now=True)),
            ],
        ),
    ]