# Generated by Django 4.2.9 on 2024-01-15 10:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('iElect', '0004_alter_controlvote_position'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='candidate',
            name='total_vote',
        ),
    ]
