from __future__ import unicode_literals

from django.db import models

from django.utils import timezone


class Facility(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=50, null=True)
    created = models.DateTimeField(default=timezone.now)
    updated = models.DateTimeField(default=timezone.now)
