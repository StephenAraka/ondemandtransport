# Generated by Django 3.0.5 on 2021-05-10 18:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Passenger',
            fields=[
                ('names', models.CharField(blank=True, max_length=25, null=True, unique=True)),
                ('telephone', models.CharField(max_length=13, primary_key=True, serialize=False, unique=True)),
                ('password', models.CharField(max_length=25, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Session_levels',
            fields=[
                ('session_id', models.TextField(primary_key=True, serialize=False)),
                ('telephone', models.CharField(max_length=25)),
                ('level', models.IntegerField(default=0, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='UssdRideRequest',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pickupTime', models.DateTimeField(blank=True, default=None, null=True)),
                ('departureCity', models.CharField(blank=True, max_length=255)),
                ('destinationCity', models.CharField(blank=True, max_length=255)),
                ('numberOfSeets', models.PositiveIntegerField(default=1, null=True)),
                ('disabledPoeple', models.PositiveIntegerField(default=0, null=True)),
                ('passengers', models.ManyToManyField(blank=True, to='ondemandUssd.Passenger')),
            ],
        ),
    ]
