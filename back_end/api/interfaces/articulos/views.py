from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from api.data.articulos.repositories import ArticuloRepository
from api.usecases.articulos.use_cases import ArticleUseCase
from api.interfaces.articulos.serializers import ArticuloSerializers
from api.pagination import MyCustomPagination
from api.data.articulos.models import Articulo

class ArticuloView(APIView):
    """Class Articulo to handle API operations related to articles."""
    article_usecase = ArticleUseCase()
    def get_object(self, pk):
        """Get an article by its ID."""
        try:
            return self.article_usecase.repository.get_by_id(pk)
        except Exception:
            raise Http404

    def get(self, request):
        """Retrieve a list of articles."""
        
        pagination_class = MyCustomPagination()
        articles = self.article_usecase.get_all_articles()
        paginated_articles = pagination_class.paginate_queryset(articles, request)
        serializer = ArticuloSerializers(paginated_articles, many=True)
        
        return Response({
            'total_items': len(articles),
            'message': 'Successfully retrieved',
            'data': serializer.data
        }, status=status.HTTP_200_OK)

    def post(self, request):
        """Create a new article."""
        serializer = ArticuloSerializers(data=request.data)
        if serializer.is_valid():
            article = self.article_usecase.create_article(serializer.validated_data)
            return Response({
                'message': 'Successfully created',
                'data': ArticuloSerializers(article).data
            }, status=status.HTTP_201_CREATED)
        return Response({
            'message': serializer.errors,
            'data': []
        }, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        """Update an existing article."""
        
        pk = request.query_params.get('pk')
        if pk is None:
            return Response({
                'message': 'The pk parameter is required',
                'data': None
            }, status=status.HTTP_400_BAD_REQUEST)

        article = self.get_object(pk)
        serializer = ArticuloSerializers(article, data=request.data)
        if serializer.is_valid():
            updated_article = self.article_usecase.update_article(pk, serializer.validated_data)
            return Response({
                'message': 'Successfully updated',
                'data': ArticuloSerializers(updated_article).data
            }, status=status.HTTP_200_OK)
        return Response({
            'message': serializer.errors,
            'data': []
        }, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        """Delete one or more articles."""
        
        pks = request.query_params.get('pks')
        if pks is None:
            return Response({
                'message': 'The pks parameter is required',
                'data': None
            }, status=status.HTTP_400_BAD_REQUEST)
        self.article_usecase.delete_articles(pks)
        return Response(status=status.HTTP_204_NO_CONTENT)