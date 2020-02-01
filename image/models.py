from djongo import models


class GunInfo(models.Model):
    time = models.DateTimeField()#auto_now_add=True
    image = models.CharField(max_length=1024)
    video = models.CharField(max_length=1024)
    location = models.CharField(max_length=1024)


class Entry(models.Model):
    GunInfo = models.EmbeddedField(
        model_container=GunInfo,
    )
    
    headline = models.CharField(max_length=255)