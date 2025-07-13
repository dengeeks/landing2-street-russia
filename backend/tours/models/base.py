from django.core.validators import FileExtensionValidator
from django.db import models

from common.models import DateTimeMixin, UUIDMixin
from common.utils import setup_image_path


class PersonBase(UUIDMixin, DateTimeMixin):
    """
    Абстрактная модель для участников, лидеров и модераторов.

    Наследует:
        - UUIDMixin: уникальный идентификатор UUID.
        - DateTimeMixin: автоматические поля создания и обновления (created_at, updated_at).

    Поля:
        - fio (CharField): Имя и фамилия.
        - email (CharField): Электронная почта.
        - phone (CharField): Номер телефона.
        - address (CharField): Адрес офиса.
        - image (ImageField): Изображение профиля с валидацией форматов.

    Мета:
        abstract = Абстрактная модель
    """

    fio = models.CharField(
        verbose_name='Имя - Фамилия',
        max_length=50
    )
    email = models.CharField(
        verbose_name='Почта',
        max_length=50
    )
    phone = models.CharField(
        verbose_name = 'Номер телефона',
        max_length = 50
    )
    address = models.CharField(
        verbose_name='Офис',
        max_length=125
    )
    image = models.ImageField(
        upload_to=setup_image_path,
        verbose_name='Изображение',
        max_length=1000,
        help_text='Загрузите изображение',
        validators=[
            FileExtensionValidator(
                allowed_extensions=['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg']
            )
        ],
    )

    class Meta:
        abstract = True