from django.conf import settings

from common.mixins import CacheServiceMixin
from contents.models.discipline import Discipline


class DisciplineService(CacheServiceMixin):
    """Сервис для обработки данных Discipline с кэшированием."""
    CACHE_KEY = settings.CACHE_DISCIPLINE_KEY
    CACHE_TIMEOUT = settings.CACHE_DISCIPLINE_TIMEOUT
    __model_discipline = Discipline

    @classmethod
    def _fetch_data(cls, serializer_class):
        instance = cls.__model_discipline.objects.all()
        return cls._serialize_collection(instance, serializer_class)
