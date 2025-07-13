from django.conf import settings

from common.mixins import CacheServiceMixin
from contents.models.contact import ContactFooter, EmailPhoneFooter
from contents.serializers.contact import EmailPhoneFooterFooterSerializer


class ContactFooterService(CacheServiceMixin):
    """Сервис для обработки данных ContactFooter с кэшированием."""
    CACHE_KEY = settings.CACHE_CONTACT_FOOTER_KEY
    CACHE_TIMEOUT = settings.CACHE_CONTACT_FOOTER_TIMEOUT
    __model_contact_footer = ContactFooter

    @classmethod
    def _fetch_data(cls, serializer_class):
        queryset = cls.__model_contact_footer.objects.all()
        return cls._serialize_collection(queryset, serializer_class)


class EmailPhoneFooterService(CacheServiceMixin):
    """Сервис для обработки данных EmailPhoneFooter с кэшированием."""
    CACHE_KEY = settings.CACHE_EMAIL_PHONE_FOOTER_KEY
    CACHE_TIMEOUT = settings.CACHE_EMAIL_PHONE_FOOTER_TIMEOUT
    __model_email_phone_footer = EmailPhoneFooter

    @classmethod
    def _fetch_data(cls, serializer_class):
        instance = cls.__model_email_phone_footer.objects.first()
        return cls._serialize_object(instance, serializer_class)
