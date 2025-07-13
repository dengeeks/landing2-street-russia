from django.conf import settings

from common.mixins import CacheServiceMixin
from contents.models.media import Media


class MediaDetailService(CacheServiceMixin):
    """Сервис для обработки данных Media с кэшированием."""
    CACHE_KEY = settings.CACHE_MEDIA_KEY
    CACHE_TIMEOUT = settings.CACHE_MEDIA_TIMEOUT
    __model_media = Media

    @classmethod
    def _fetch_data(cls, serializer_class):
        instance = cls.__model_media.objects.first()
        return cls._serialize_object(instance, serializer_class)
