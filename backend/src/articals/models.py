from django.db import models


def upload_location(instance, filename):
    return "%s/%s" % (instance.id, filename)


class Article(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    description = models.TextField(default="Null")
    image = models.ImageField(
        upload_to=upload_location,
        null=True,
        blank=True,
        width_field="width_field",
        height_field="height_field")
    height_field = models.IntegerField(default=0)
    width_field = models.IntegerField(default=0)

    def __str__(self):
        return self.title
