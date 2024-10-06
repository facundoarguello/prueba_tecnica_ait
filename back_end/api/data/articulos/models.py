from django.db import models
from django.core.exceptions import ValidationError

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
        super().save(*args, **kwargs)

    def clean(self):
        if self.price < 0:
            raise ValidationError('Price cannot be negative.')

    def __str__(self):
        return f"{self.description} - {self.strprice}"

    class Meta:
        ordering = ['datecreate']
