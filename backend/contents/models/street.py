from django.db import models

from common.models import DateTimeMixin


class Street(DateTimeMixin):
    """
    Модель для блока Улицы.

    Наследует:
        - DateTimeMixin: Автоматические поля created_at и updated_at.

    Поля:
        - name (CharField): Уникальное название .
    """

    text = models.TextField(
        verbose_name = 'Текстовое описание',
        help_text = 'Описание блока УЛИЦЫ'
    )

    class Meta:
        verbose_name = 'блок улицы'
        verbose_name_plural = 'блок улицы'
