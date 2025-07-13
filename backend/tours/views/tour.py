from rest_framework.response import Response
from rest_framework.views import APIView

from tours.serializers.tour import TourSerializer, TourDetailSerializer
from tours.services.tour import TourService, TourDetailService


class TourAPI(APIView):
    """API для списка туров."""
    serializer_class = TourSerializer
    service_class = TourService

    def get(self, request):
        data = self.service_class.get_content_data(
            serializer_class = self.serializer_class,
        )

        return Response(data)


class TourDetailAPI(APIView):
    """API для детальной информации о туре."""
    serializer_class = TourDetailSerializer
    service_class = TourDetailService

    def get(self, request):
        data = self.service_class.get_content_data(
            serializer_class = self.serializer_class,
        )
        return Response(data)
