from rest_framework.response import Response
from rest_framework.views import APIView

from contents.serializers.media import MediaSerializer
from contents.services.media import MediaDetailService


class MediaDetailAPI(APIView):
    """
    API-представление для получения данных о блоке Аккредитация для СМИ .
    Обрабатывает GET-запросы, возвращая сериализованные данные из MediaDetailService.
    """
    service_class = MediaDetailService
    serializer_class = MediaSerializer

    def get(self, request):
        data = self.service_class.get_content_data(serializer_class = self.serializer_class)
        return Response(data)
