from django.conf import settings
from django.core.cache import cache
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver

from contents.models.contact import ContactFooter, EmailPhoneFooter
from contents.models.discipline import Discipline
from contents.models.media import Media
from contents.models.street import Street


@receiver([post_save, post_delete], sender = ContactFooter)
def invalidate_contact_footer_cache(sender, **kwargs):
    cache.delete(settings.CACHE_CONTACT_FOOTER_KEY)


@receiver([post_save, post_delete], sender = EmailPhoneFooter)
def invalidate_email_phone_footer_cache(sender, **kwargs):
    cache.delete(settings.CACHE_EMAIL_PHONE_FOOTER_KEY)


@receiver([post_save, post_delete], sender = Media)
def invalidate_media_detail_cache(sender, **kwargs):
    cache.delete(settings.CACHE_MEDIA_KEY)


@receiver([post_save, post_delete], sender = Discipline)
def invalidate_discipline_cache(sender, **kwargs):
    cache.delete(settings.CACHE_DISCIPLINE_KEY)


@receiver([post_save, post_delete], sender = Street)
def invalidate_street_cache(sender, **kwargs):
    cache.delete(settings.CACHE_STREET_KEY)
