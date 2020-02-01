from djongo import models

class GunInfo(models.Model):
    time = models.DateTimeField()#auto_now_add=True
    image = models.CharField()
    video = models.CharField()
    location = models.CharField()