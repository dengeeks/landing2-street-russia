from django.conf import settings
from django.db.models import Prefetch

from common.mixins import CacheServiceMixin
from tours.models.tour import Tour, ProgramDate, Program


class TourService(CacheServiceMixin):
    __model_tour = Tour
    CACHE_KEY = settings.CACHE_TOUR_KEY
    CACHE_TIMEOUT = settings.CACHE_TOUR_TIMEOUT

    @classmethod
    def _fetch_data(cls, serializer_class):
        instance = Tour.objects.select_related(
            'participant'
        ).prefetch_related(
            'moderator__social_links__social_media',
            'participant__social_links__social_media',
            'tour_activities__city__region',
            'gallery'
        ).first()

        return cls._serialize_object(instance, serializer_class)


class TourDetailService(CacheServiceMixin):
    __model_tour = Tour
    CACHE_KEY = settings.CACHE_TOUR_DETAIL_KEY
    CACHE_TIMEOUT = settings.CACHE_TOUR_DETAIL_TIMEOUT

    @classmethod
    def _fetch_data(cls, serializer_class):
        instance = Tour.objects.prefetch_related(
            Prefetch(
                'programs',
                queryset = ProgramDate.objects.order_by('date').prefetch_related(
                    Prefetch(
                        'programs',
                        queryset = Program.objects.order_by('start_time').prefetch_related(
                            'moderator__social_links'  # Prefetch moderators and their social links
                        )
                    )
                )
            )
        ).first()
        return cls._serialize_object(instance, serializer_class)
