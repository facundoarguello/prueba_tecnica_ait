from rest_framework import serializers
from api.data.articulos.models import Articulo

class ArticuloSerializers(serializers.ModelSerializer):
    class Meta:
        model = Articulo
        fields = '__all__'
        