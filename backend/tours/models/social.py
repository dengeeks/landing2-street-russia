from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.core.validators import FileExtensionValidator
from django.db import models

from common.models import UUIDMixin, DateTimeMixin
from common.utils import setup_image_path


class SocialMedia(UUIDMixin, DateTimeMixin):
    """
    Модель для изображения соцсети.

    Наследует:
        - UUIDMixin: UUID primary key наследование.
        - DateTimeMixin: автоматические поля создания и обновления.

    Поля:
        - name (URLField): Название соцсети.
        - image (ImageField): Изображение.

    Мета:
        verbose_name = един. число название модели
        verbose_name_plural = мн. число название модели

    Методы:
        __str__(): Возвращает строковое представление.
    """

    name = models.CharField(
        max_length = 25,
        unique = True,
        verbose_name = 'Название соцсети',
    )
    image = models.ImageField(
        upload_to = setup_image_path,
        verbose_name = 'Изображение',
        max_length = 1000,
        help_text = 'Загрузите изображение соцсети',
        validators = [
            FileExtensionValidator(
                allowed_extensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg']
            )
        ]
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'изображение соцсети'
        verbose_name_plural = 'изображения соцсети'


class SocialLink(DateTimeMixin):
    """
    Модель для хранений ссылок соцсетей руководителей.

    Наследует:
        - DateTimeMixin: автоматические поля создания и обновления.

    Поля:
        - url (URLField): Ссылка на соцсеть.
        - social_media (ForeignKey): Соцсеть руководителя.
        - content_type(ForeignKey): Тип связанного объекта.
        - object_id(UUIDField): ID связанного объекта.
        - related_object(GenericForeignKey):

    Мета:
        verbose_name = един. число модели
        verbose_name_plural = мнж. число модели

    """
    url = models.URLField(
        verbose_name = 'Ссылка на соцсеть'
    )
    social_media = models.ForeignKey(
        to = SocialMedia,
        on_delete = models.CASCADE,
        verbose_name = 'Соцсеть руководителя',
        related_name = 'social_links'
    )
    # Универсальная связь
    content_type = models.ForeignKey(
        ContentType,
        on_delete = models.CASCADE,
        verbose_name = 'Тип связанного объекта'
    )
    object_id = models.UUIDField(verbose_name = 'ID связанного объекта')
    related_object = GenericForeignKey('content_type', 'object_id')

    class Meta:
        verbose_name = 'соцсеть объекта'
        verbose_name_plural = 'соцсети объектов'
