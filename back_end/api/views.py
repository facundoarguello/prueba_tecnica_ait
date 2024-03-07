from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ArticuloSerializers
from .models import Articulo
from rest_framework import status
from django.http import Http404
from .pagination import MyCustomPagination

# Create your views here.

class ArticuloView(APIView):
    "Class articulo to call apia and his methods"

    def get_object(self, pk):
        "Get only one item"
        try:
            return Articulo.objects.get(pk=pk)
        except Articulo.DoesNotExist:
            raise Http404

    def get(self, request):
        "Get many items"
        json_response = {}
        items = Articulo.objects.all()
        items_len = len(items)
        pagination_class = MyCustomPagination()
        result_page = pagination_class.paginate_queryset(items, request)
        serializer_items = ArticuloSerializers(result_page, many=True)
        
        
        json_response['total_items'] = items_len
        json_response['message'] = 'Succesfully'
        json_response['data'] = serializer_items.data

        return Response(json_response, status=status.HTTP_200_OK)


    def post(self, request):
        "Insert one or many items"
        items_request = request.data
        json_response = {}
        if isinstance(items_request, list):
            serializer_item = ArticuloSerializers(data=items_request, many=True)
        else:
            serializer_item = ArticuloSerializers(data=items_request)

        if serializer_item.is_valid():
            serializer_item.save()
            json_response['message'] = 'Succesfully'
            json_response['data'] = serializer_item.data
            return Response(json_response, status=status.HTTP_201_CREATED)
        json_response['message'] = serializer_item.errors
        json_response['data'] = []
        return Response(json_response, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        "Update a item"
        json_response = {}
        if request.query_params.get('pk') is None :
            json_response['message'] = 'The pk parameter is required'
            json_response['data'] = None
            return Response(json_response, status=status.HTTP_400_BAD_REQUEST)
        if request.body == {} :
            json_response['message'] = 'The body is required but is empty'
            json_response['data'] = None
            return Response(json_response, status=status.HTTP_400_BAD_REQUEST)
        
        pk = request.query_params.get('pk')
        item = self.get_object(pk)
        serializer = ArticuloSerializers(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            json_response['message'] = 'Succesfully'
            json_response['data'] = serializer.data
            return Response(json_response, status=status.HTTP_200_OK)
        json_response['message'] = serializer.errors
        json_response['data'] = []
        return Response(json_response, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        "Delete one or many items"
        json_response = {}
        if request.query_params.get('pks') is None :
            json_response['message'] = 'The pks parameter is required'
            json_response['data'] = None
            return Response(json_response, status=status.HTTP_400_BAD_REQUEST)
        pks = request.query_params.get('pks').split(',')
        if pks:
            item = Articulo.objects.filter(id__in=pks)
            item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
