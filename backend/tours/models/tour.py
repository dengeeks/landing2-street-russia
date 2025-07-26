from ckeditor.fields import RichTextField
from django.core.validators import FileExtensionValidator
from django.db import models

from common.models import UUIDMixin, DateTimeMixin
from common.utils import setup_image_path
from common.validators import validate_iframe
from regions.models.region import City
from tours.models.moderator import Moderator
from tours.models.participant import Participant


class Tour(UUIDMixin, DateTimeMixin):
    """
    Модель для представления тура.

    Описание:
        Модель хранит информацию о туре, включая название, описание, медиаконтент,
        даты проведения, адрес, участников и другие характеристики.

    Наследует:
        - UUIDMixin: добавляет уникальный идентификатор UUID.
        - DateTimeMixin: добавляет поля created_at и updated_at для отслеживания времени создания и обновления.

    Поля:
        - title: Название тура (максимум 125 символов).
        - address: Физический адрес проведения тура (максимум 125 символов).
        - starting_date: Дата и время начала тура.
        - ending_date: Дата и время завершения тура.
        - region: Регион, связанный с туром (связь один-к-одному).
        - city: Город, в котором проводится тур.
        - address_yandex: HTML-код iframe для отображения адреса на Яндекс.Картах.
        - info_participant: Текстовое описание участников тура.
        - participant: Основной участник тура (связь один-к-одному).
        - moderator: Модераторы и гости тура (связь многие-ко-многим).
        - place: Место проведения тура (текстовое описание).
        - target_audience: Целевая аудитория тура (текстовое описание).
        - target: Цели тура (текстовое описание).
        - format_type: Тип медиаконтента для основного блока (видео или изображение).
        - video_url: URL-адрес видео для основного блока (опционально).
        - image: Изображение для основного блока (опционально).
        - format_type2: Тип медиаконтента для дополнительного блока под картой (видео или изображение).
        - video_url2: URL-адрес видео для дополнительного блока (опционально).
        - image2: Изображение для дополнительного блока под картой (опционально).

    Мета:
        verbose_name = един. число название модели
        verbose_name_plural = мн. число название модели

    Методы:
        __str__(): Возвращает строковое представление
    """

    def setup_image2_path(self, filename: str):
        filename = filename.replace(' ', '_')
        return f'uploads/{self.__class__.__name__.lower()}/image2/{self.pk}/{filename}'

    FORMAT_TYPE = [
        ('video_url', 'Видео'),
        ('image', 'Изображение'),
    ]

    title = models.CharField(max_length = 125, verbose_name = 'Название')
    address = models.CharField(max_length = 125, verbose_name = 'Адрес')
    starting_date = models.DateTimeField(verbose_name = 'Дата начала')
    ending_date = models.DateTimeField(verbose_name = 'Дата завершения')
    info_participant = models.TextField(verbose_name = 'Описание', help_text = 'Описание блока участники')
    moderator = models.ManyToManyField(to = Moderator, verbose_name = 'Диджеи и гости')
    place = models.TextField(verbose_name = 'Место')
    target_audience = models.TextField(verbose_name = 'Целевая аудитория')
    target = models.TextField(verbose_name = 'Цель')

    participant = models.ForeignKey(
        to = Participant,
        verbose_name = 'Участник',
        on_delete = models.CASCADE,
        related_name = 'tours'
    )
    address_yandex = models.CharField(
        max_length = 1000,
        verbose_name = 'Адрес Яндекс-Карт iframe',
        validators = [validate_iframe],
        help_text = 'iframe брать здесь: https://yandex.ru/map-constructor/?from=constructorapi'
    )

    format_type = models.CharField(
        max_length = 25,
        choices = FORMAT_TYPE,
        verbose_name = 'Тип контента',
        help_text = 'Выберите тип медиа (Изображение или видео)'
    )

    video_url = models.URLField(
        verbose_name = 'Ссылка на видео',
        help_text = 'URL видео (главное)',
        blank = True,
        null = True,
        max_length = 1000
    )
    image = models.ImageField(
        upload_to = setup_image_path,
        verbose_name = 'Изображение',
        max_length = 1000,
        help_text = 'Загрузите изображение (главное)',
        validators = [
            FileExtensionValidator(
                allowed_extensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg']
            )
        ],
        blank = True,
        null = True
    )
    format_type2 = models.CharField(
        max_length = 25,
        choices = FORMAT_TYPE,
        verbose_name = 'Тип контента',
        help_text = 'Выберите тип медиа (Изображение или видео) для блока под картой'
    )

    video_url2 = models.URLField(
        verbose_name = 'Ссылка на видео',
        help_text = 'URL видео для блока под картой',
        blank = True,
        null = True,
        max_length = 1000
    )
    image2 = models.ImageField(
        upload_to = setup_image2_path,
        verbose_name = 'Изображение',
        max_length = 1000,
        help_text = 'Загрузите изображение для блока под картой',
        validators = [
            FileExtensionValidator(
                allowed_extensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg']
            )
        ],
        blank = True,
        null = True
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'тур'
        verbose_name_plural = 'тур'


class TourCityActivity(DateTimeMixin):
    """
    Модель, представляющая связь тура с городом и датой активности.

    Наследует:
        - DateTimeMixin: добавляет поля created_at и updated_at для отслеживания времени.

    Поля:
        - tour: Связь с моделью Tour (один к одному).
        - city: Город, в котором проводится тур.
        - date: Дата проведения активности.

    Мета:
        - verbose_name: Название модели в единственном числе.
        - verbose_name_plural: Название модели во множественном числе.

    Методы:
        - __str__: Возвращает строковое представление активности.
    """
    tour = models.ForeignKey(
        to = Tour,
        on_delete = models.CASCADE,
        verbose_name = 'Тур',
        related_name = 'tour_activities'
    )
    city = models.OneToOneField(
        to = City,
        verbose_name = 'Город',
        help_text = 'Выберите город в котором проходит тур',
        on_delete = models.CASCADE,
        related_name = 'tour_activities'
    )
    date = models.DateTimeField(
        verbose_name = 'Дата'
    )

    class Meta:
        verbose_name = 'активность'
        verbose_name_plural = 'активность'


class ProgramDate(UUIDMixin, DateTimeMixin):
    date = models.DateField(verbose_name = 'Дата')
    tour = models.ForeignKey(
        to = Tour,
        verbose_name = 'Тур',
        on_delete = models.CASCADE,
        related_name = 'programs'
    )

    class Meta:
        verbose_name = 'дата программы'
        verbose_name_plural = 'дата программы'
        constraints = [
            models.UniqueConstraint(fields=['date', 'tour'], name='unique_program_date_per_tour')
        ]


class Program(UUIDMixin, DateTimeMixin):
    program_date = models.ForeignKey(
        to = ProgramDate,
        verbose_name = 'Дата',
        on_delete = models.CASCADE,
        related_name = 'programs'
    )
    start_time = models.TimeField(
        verbose_name = 'Время начала'
    )
    description = RichTextField(
        verbose_name = 'Описание',
        null = True,
        blank = True
    )
    moderator = models.ManyToManyField(
        to = Moderator,
        related_name = 'programs',
        null = True,
        blank = True
    )

    class Meta:
        verbose_name = 'программа'
        verbose_name_plural = 'программа'
