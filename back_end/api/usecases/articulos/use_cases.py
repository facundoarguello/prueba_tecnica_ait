from datetime import datetime
from api.data.articulos.repositories import ArticuloRepository
from api.domain.articulos.exceptions import ImportExcelArticleException
import pandas as pd
from django.http import HttpResponse
from io import BytesIO

from api.domain.exceptions import ReadExcelException
from api.interfaces.articulos.articulo_serializer import ArticuloSerializers

class ArticleUseCase:
    def __init__(self):
        self.repository = ArticuloRepository()

    def get_all_articles(self):
        return self.repository.get_all()

    def create_article(self, data):
        return self.repository.create(data)

    def update_article(self, pk, data):
        article = self.repository.get_by_id(pk)
        return self.repository.update(article, data)

    def delete_article(self, pk):
        article = self.repository.get_by_id(pk)
        self.repository.delete(article)
        
    def delete_articles(self, pks):
        pks_list = pks.split(',')
        filter_id_in = {
            "id__in" : pks_list
        }
        articles = self.repository.filter_by_ids(filter_id_in)
        self.repository.delete(articles)
    def articles_excel_import(self,excel_file):
        try:
            df = pd.read_excel(excel_file)
        except Exception as e:
            raise ReadExcelException(message= str(e))
        for _, row in df.iterrows():
           try:
                print("facu",row)
                self.repository.import_excel_data_in_db(row)
           except Exception as e:
               raise ImportExcelArticleException(message=str(e))
           
    def articles_excel_export(self):
        articulos = self.get_all_articles()
        serializer = ArticuloSerializers(articulos, many=True)
        df = pd.DataFrame(serializer.data)
        with BytesIO() as buffer:
            with pd.ExcelWriter(buffer, engine='openpyxl') as writer:
                df.to_excel(writer, index=False, sheet_name='Articulos')

            response = HttpResponse(
                buffer.getvalue(),
                content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            )
            response['Content-Disposition'] = f'attachment; filename=articulos_{datetime.now()}.xlsx'
            
            return response

