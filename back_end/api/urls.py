from django.urls import path

from api.interfaces.articulos.articulos_excel_view import ArticuloExcelView
from .interfaces.articulos.articulo_view import ArticuloView

urlpatterns =[
    path('articulos/', ArticuloView.as_view(), name='articulos-list'),
    path('articulos/import', ArticuloExcelView.as_view(), name='articulos-list-import'),
    path('articulos/export', ArticuloExcelView.as_view(), name='articulos-list-export'),
    
]