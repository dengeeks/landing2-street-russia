from django.conf import settings
from django.core.cache import cache
from django.db.models.signals import post_save, post_delete, m2m_changed
from django.dispatch import receiver

from regions.models.region import Region, City
from tours.models.leader import Leader
from tours.models.moderator import Moderator
from tours.models.participant import BlockParticipantGallery, Participant
from tours.models.social import SocialLink, SocialMedia
from tours.models.tour import Tour, TourCityActivity


@receiver([post_save, post_delete], sender = Tour)
@receiver([post_save, post_delete], sender = TourCityActivity)
@receiver([post_save, post_delete], sender = Leader)
@receiver([post_save, post_delete], sender = Participant)
@receiver([post_save, post_delete], sender = Moderator)
@receiver([post_save, post_delete], sender = Region)
@receiver([post_save, post_delete], sender = City)
@receiver([post_save, post_delete], sender = SocialLink)
@receiver([post_save, post_delete], sender = SocialMedia)
@receiver([post_save, post_delete], sender = BlockParticipantGallery)
def invalidate_tour_related_models(sender, instance, **kwargs):
    cache.delete(settings.CACHE_TOUR_KEY)
    cache.delete(settings.CACHE_TOUR_DETAIL_KEY)


@receiver(m2m_changed, sender = Tour.moderator.through)
def invalidate_tour_m2m(sender, instance, **kwargs):
    cache.delete(settings.CACHE_TOUR_KEY)
    cache.delete(settings.CACHE_TOUR_DETAIL_KEY)
