from django.core.validators import FileExtensionValidator
from django.db import models

from common.models import UUIDMixin, DateTimeMixin, MaxCountLimitedMixin
from common.utils import setup_image_path


class ContactFooter(UUIDMixin, DateTimeMixin, MaxCountLimitedMixin):
    """
    Модель для контактов (footer).

    Наследует:
        - UUIDMixin: UUID primary key наследование.
        - DateTimeMixin: автоматические поля создания и обновления.
        - MaxCountLimitedMixin: ограничение по количеству изображений (до 6).

    Поля:
        - url (URLField): Ссылка на соцсеть.
        - image (ImageField): Изображение.

    Мета:
        verbose_name = един. число название модели
        verbose_name_plural = мн. число название модели

    Методы:
        __str__(): Возвращает строковое представление
    """
    MAX_COUNT = 6

    url = models.URLField(verbose_name = 'Ссылка на соцсеть')
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
        return 'Детали'

    class Meta:
        verbose_name = 'контакты (footer)'
        verbose_name_plural = 'контакты (footer)'


class EmailPhoneFooter(DateTimeMixin):
    """
    Модель для почты и номера (footer)".

    Наследует:
        - DateTimeMixin: автоматические поля создания и обновления.

    Поля:
        - email (EmailField): Почта поддержки в Footer.
        - phone (CharField): Номер в Footer.

    Мета:
        verbose_name = един. число название модели
        verbose_name_plural = мн. число название модели

    Методы:
        __str__(): Возвращает строковое представление
    """
    email = models.CharField(
        max_length = 50,
        verbose_name = 'Почта поддержки в Footer'
    )
    phone = models.CharField(
        max_length = 50,
        verbose_name = 'Номер в Footer'
    )

    def __str__(self):
        return 'Детали'

    class Meta:
        verbose_name = 'почта,номер (footer)'
        verbose_name_plural = 'почта,почта,номер (footer)'
