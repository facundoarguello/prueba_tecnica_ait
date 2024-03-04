from rest_framework import serializers
from .models import Articulo

class ArticuloSerializers(serializers.ModelSerializer):
    class Meta:
        model = Articulo
        fields = '__all__'
        