from api.domain.repositories import RepositoryInterface
from .models import Articulo

class ArticuloRepository(RepositoryInterface):
    def get_all(self):
        return Articulo.objects.all()

    def get_by_id(self, pk):
        return Articulo.objects.get(pk=pk)

    def create(self, data):
        return Articulo.objects.create(**data)

    def update(self, instance, data):
        for attr, value in data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

    def delete(self, instance):
        instance.delete()
    def filter(self, filter_data):
        item = Articulo.objects.filter(**filter_data)
        return item

