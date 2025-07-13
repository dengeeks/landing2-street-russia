from rest_framework.response import Response
from rest_framework.views import APIView

from contents.serializers.contact import ContactFooterSerializer, EmailPhoneFooterFooterSerializer
from contents.services.contact import ContactFooterService, EmailPhoneFooterService


class ContactFooterAPI(APIView):
    """
    API-представление для получения данных контактной информации футера.
    Обрабатывает GET-запросы, возвращая сериализованные данные из ContactFooterService.
    """
    service_class = ContactFooterService
    serializer_class = ContactFooterSerializer

    def get(self, request):
        data = self.service_class.get_content_data(serializer_class = self.serializer_class)
        return Response(data)


class EmailPhoneFooterAPI(APIView):
    """
    API-представление для получения данных электронной почты и телефона футера.
    Обрабатывает GET-запросы, возвращая сериализованные данные из EmailPhoneFooterService.
    """
    service_class = EmailPhoneFooterService
    serializer_class = EmailPhoneFooterFooterSerializer

    def get(self, request):
        data = EmailPhoneFooterService.get_content_data(serializer_class = self.serializer_class)
        return Response(data)
