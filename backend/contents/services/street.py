from django.conf import settings

from common.mixins import CacheServiceMixin
from contents.models.street import Street


class StreetService(CacheServiceMixin):
    """Сервис для обработки данных Street с кэшированием."""
    CACHE_KEY = settings.CACHE_STREET_KEY
    CACHE_TIMEOUT = settings.CACHE_STREET_TIMEOUT
    __model_media = Street

    @classmethod
    def _fetch_data(cls, serializer_class):
        instance = cls.__model_media.objects.first()
        return cls._serialize_object(instance, serializer_class)
