from django.core.validators import FileExtensionValidator
from django.db import models

from common.models import UUIDMixin, DateTimeMixin
from common.utils import setup_image_path


class PartnerType(DateTimeMixin):
    """
    Модель, представляющая Тип партнера.

    Поля:
        name (CharField): Тип партнёра.

    Мета:
        verbose_name = един. число название модели
        verbose_name_plural = мн. число название модели
    """
    name = models.CharField(
        verbose_name = 'Тип партнера',
        max_length = 125
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'тип партнера'
        verbose_name_plural = 'тип партнера'


class Partner(UUIDMixin, DateTimeMixin):
    """
    Модель, представляющая партёра.

    Поля:
        name (CharField): Название партнёра.
        image (ImageField): Изображение партнёра.
        description (TextField): Описание партёра.
        type (ForeignKey): Тип партнёра.
        url (URLField): Ссылка на партнера.

    Мета:
        verbose_name = един. число название модели
        verbose_name_plural = мн. число название модели

    """

    name = models.CharField(
        'Название партнёра',
        max_length = 150,
        unique = True,
    )
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
    description = models.TextField(
        verbose_name = 'Описание партёра'
    )
    type = models.ForeignKey(
        to = PartnerType,
        verbose_name = 'Тип партнера',
        on_delete = models.RESTRICT,
        related_name = 'partners'
    )
    url = models.URLField(
        verbose_name = 'Ссылка на партнера',
        max_length = 1000,
        blank = True,
        null = True
    )

    class Meta:
        verbose_name = 'партнёр'
        verbose_name_plural = 'партнёры'

    def __str__(self):
        return self.name
