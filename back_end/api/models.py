from django.db import models

# Create your models here.

class Articulos(models.Model):
    COINS_SYMBOLS = {
        "S": "Small",
        "M": "Medium",
        "L": "Large",
    }

    description = models.CharField(max_length=200)
    code = models.CharField(max_length=30)
    coin = models.CharField(max_length=6)
    price = models.FloatField()
    strprice = models.CharField(max_length=20)
    datecreate = models.DateField(auto_now=True)

    def save(self, *args, **kwargs):
        self.strprice = f"{self.coin} {self.price}"
        return super().save(*args, **kwargs)
