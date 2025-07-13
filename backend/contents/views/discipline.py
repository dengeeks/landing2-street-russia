from rest_framework.response import Response
from rest_framework.views import APIView

from contents.serializers.discpline import DisciplineSerializer
from contents.services.discipline import DisciplineService


class DisciplineAPI(APIView):
    """
    API-представление для получения данных дисциплин.
    Обрабатывает GET-запросы, возвращая сериализованные данные из DisciplineService.
    """
    service_class = DisciplineService
    serializer_class = DisciplineSerializer

    def get(self, request):
        data = self.service_class.get_content_data(serializer_class = self.serializer_class)
        return Response(data)
