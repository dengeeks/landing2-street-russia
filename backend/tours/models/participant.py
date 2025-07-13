from django.contrib.contenttypes.fields import GenericRelation
from django.core.validators import FileExtensionValidator
from django.db import models

from common.models import DateTimeMixin
from common.utils import setup_image_path
from tours.models.base import PersonBase
from tours.models.social import SocialLink


class Participant(PersonBase):
    """
    Модель, представляющая участника форума.

    Наследует:
        - PersonBase: общие поля для участников (fio, email, phone, address, image).

    Поля:
        - title (CharField): Заголовок карточки Участники (например, "Работа с участниками").
        - social_links (GenericRelation): Связь с социальными ссылками участника.

    Мета:
        verbose_name = един. число название модели
        verbose_name_plural = мн. число название модели

    Методы:
        __str__(): Возвращает строковое представление.
    """
    title = models.CharField(
        verbose_name = 'Заголовок',
        max_length = 50,
        help_text = 'Заголовок карточки "Участники" (Работа с участниками)'
    )
    social_links = GenericRelation(SocialLink, related_query_name = 'participant')

    def __str__(self):
        return self.fio

    class Meta:
        verbose_name = 'участник'
        verbose_name_plural = 'участник'


class BlockParticipantGallery(DateTimeMixin):
    image = models.ImageField(
        upload_to = setup_image_path,
        verbose_name = 'Изображение',
        max_length = 1000,
        help_text = 'Загрузите изображение',
        validators = [
            FileExtensionValidator(
                allowed_extensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg']
            )
        ]
    )
    tour = models.ForeignKey(
        to = 'Tour',
        on_delete = models.RESTRICT,
        related_name = 'gallery',
        verbose_name = 'форум'
    )

    class Meta:
        verbose_name = "Галерея блока участника"
        verbose_name_plural = "Галерея блоков участников"

    def __str__(self):
        return f"Изображение для {self.tour.title}"
