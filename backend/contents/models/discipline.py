from django.db import models

from common.models import DateTimeMixin


class Discipline(DateTimeMixin):
    """
    Модель дисциплины уличной культуры.

    Наследует:
        - DateTimeMixin: Автоматические поля created_at и updated_at.

    Поля:
        - name (CharField): Уникальное название дисциплины.

    Методы:
        - __str__: Возвращает название дисциплины.
    """

    title = models.CharField(
        'Название дисциплины',
        max_length = 30,
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'дисциплина'
        verbose_name_plural = 'дисциплина'
