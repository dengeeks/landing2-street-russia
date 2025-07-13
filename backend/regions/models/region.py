from django.db import models

from common.models import DateTimeMixin, UUIDMixin


class Region(UUIDMixin, DateTimeMixin):
    """
    Модель, представляющая регион.

    Атрибуты:
        - name (CharField): Название региона.
        - code (CharField): Код региона.

    Мета:
        verbose_name = 'регион'
        verbose_name_plural = 'регионы'

    """
    name = models.CharField(
        'Название региона',
        max_length = 50,
        db_index = True,
        unique = True
    )
    code = models.CharField(
        'Код региона',
        max_length = 10,
        unique = True
    )

    def __str__(self):
        return f'{self.name}'

    class Meta:
        verbose_name = 'регион'
        verbose_name_plural = 'регионы'


class City(UUIDMixin, DateTimeMixin):
    """
    Модель, представляющая город.

    Атрибуты:
        - name (CharField): Название города.
        - region (ForeignKey): Название региона.

    Мета:
        verbose_name (str): Название модели в единственном числе.
        verbose_name_plural (str): Название модели во множественном числе.

    """
    name = models.CharField(
        'Название города',
        max_length = 25,
        db_index = True,
    )
    region = models.ForeignKey(
        to = Region,
        on_delete = models.CASCADE,
        related_name = 'cities',
        verbose_name = 'Регион',
        help_text = 'Выберите регион'
    )

    class Meta:
        verbose_name = 'город'
        verbose_name_plural = 'города'

    def __str__(self):
        return f'{self.name}'
