import logging

from rest_framework.response import Response
from rest_framework.views import APIView

from partners.serializers.partner import ListPartnerSerializer
from partners.services.partner import PartnerService

logger = logging.getLogger(__name__)


class ListPartnerAPI(APIView):
    service_class = PartnerService
    serializer_class = ListPartnerSerializer

    def get(self, request):
        data = self.service_class.get_content_data(
            serializer_class = self.serializer_class
        )
        return Response(data)
