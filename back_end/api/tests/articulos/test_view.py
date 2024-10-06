# tests/test_views.py

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from api.data.articulos.models import Articulo

class ArticuloViewTest(APITestCase):
    def setUp(self):
        self.articulo = Articulo.objects.create(
            description="Sample Article",
            code="ART123",
            coin="$ARS",
            price=100.0
        )
        self.url = reverse('articulos-list')

    def test_get_articulos(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['data']), 1)
        self.assertEqual(response.data['data'][0]['description'], self.articulo.description)

    def test_post_articulo(self):
        data = {
            "description": "New Article",
            "code": "ART456",
            "coin": "$USD",
            "price": 150.0
        }
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['data']['description'], data['description'])

    def test_put_articulo(self):
        update_data = {
            "description": "Updated Article",
            "code": "ART123",
            "coin": "$ARS",
            "price": 200.0
        }
        response = self.client.put(f"{self.url}?pk={self.articulo.pk}", update_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.articulo.refresh_from_db()
        self.assertEqual(self.articulo.description, update_data['description'])

    def test_delete_articulo(self):
        response = self.client.delete(f"{self.url}?pks={self.articulo.pk}")
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Articulo.objects.filter(pk=self.articulo.pk).exists())

    def test_invalid_post_articulo(self):
        data = {
            "description": "",  # Missing description
            "code": "ART789",
            "coin": "$ARS",
            "price": 100.0
        }
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('message', response.data)

