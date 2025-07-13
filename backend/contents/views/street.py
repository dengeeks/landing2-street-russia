from rest_framework.response import Response
from rest_framework.views import APIView

from contents.serializers.street import StreetSerializer
from contents.services.street import StreetService


class StreetAPI(APIView):
    """
    API-представление для получения данных о блоке УЛИЦЫ.
    Обрабатывает GET-запросы, возвращая сериализованные данные из Street.
    """
    service_class = StreetService
    serializer_class = StreetSerializer

    def get(self, request):
        data = self.service_class.get_content_data(serializer_class = self.serializer_class)
        return Response(data)
