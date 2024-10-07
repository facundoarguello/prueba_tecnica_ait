from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from api.usecases.articulos.use_cases import ArticleUseCase

class ArticuloExcelView(APIView):
    """
    API endpoint to import Articulos data from an Excel file.
    """
    parser_classes = (MultiPartParser, FormParser)
    use_case = ArticleUseCase()
    def post(self, request):
        if 'file' not in request.FILES:
            return Response({'message': 'No file provided'}, status=status.HTTP_400_BAD_REQUEST)
        excel_file = request.FILES['file']
        
        try:
            self.use_case.articles_excel_import(excel_file)
        except Exception as exc:
            return Response({'message': f'Error processing import', 'error': str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'message': 'Articulos imported successfully'}, status=status.HTTP_201_CREATED)
    
    def get(self, request):
        response = self.use_case.articles_excel_export()
        return response

