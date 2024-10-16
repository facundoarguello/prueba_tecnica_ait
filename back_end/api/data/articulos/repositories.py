from api.domain.articulos.articulo_repository import AriticuloRepositoryInterface
from .models import Articulo

class ArticuloRepository(AriticuloRepositoryInterface):
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
    def filter_by_ids(self, filter_data):
        item = Articulo.objects.filter(**filter_data)
        return item
    def import_excel_data_in_db(self, row):
        Articulo.objects.update_or_create(
                    id=row['Id'],
                    defaults={
                        'description': row['Description'],
                        'coin': row['Coin'],
                        'price': row['Price'],
                        'datecreate': row['Date Create'],
                        'code': row['Code']
                    }
                )

