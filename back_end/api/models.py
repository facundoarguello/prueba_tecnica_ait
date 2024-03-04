from django.db import models

# Create your models here.

class Articulo(models.Model):
    COINS_SYMBOLS = [
        ("$USD", "$USD"),
        ("$ARS", "$ARS"),
        ("€EUR", "€EUR"),
    ]

    description = models.CharField(max_length=200)
    code = models.CharField(max_length=30)
    coin = models.CharField(max_length=6, choices=COINS_SYMBOLS, default='$ARS')
    price = models.FloatField()
    strprice = models.CharField(max_length=20, null=True, blank=True)
    datecreate = models.DateField(auto_now=True)

    def save(self, *args, **kwargs):
        self.strprice = f"{self.coin} {self.price}"
        return super().save(*args, **kwargs)
