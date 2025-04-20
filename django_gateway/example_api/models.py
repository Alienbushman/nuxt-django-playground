from django.db import models


class UserText(models.Model):
    example_text = models.CharField(max_length=128, unique=True)

    class Meta:
        db_table = "user_text"
