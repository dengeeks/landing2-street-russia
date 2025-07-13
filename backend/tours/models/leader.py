from django.contrib.contenttypes.fields import GenericRelation
from django.db import models

from tours.models.base import PersonBase
from tours.models.social import SocialLink


class Leader(PersonBase):
    """
    Модель, представляющая лидера форума.

    Наследует:
        - PersonBase: общие поля для участников (fio, email, phone, address, image).

    Поля:
        - title (CharField): Заголовок карточки лидера (например, "Руководитель региона").
        - social_links (GenericRelation): Связь с социальными ссылками лидера.

    Мета:
        verbose_name = един. число название модели
        verbose_name_plural = мн. число название модели

    Методы:
        __str__(): Возвращает строковое представление.
    """
    title = models.CharField(
        verbose_name = 'Заголовок',
        max_length = 50,
        help_text = 'Заголовок карточки "Лидера" в форуме (Руководитель региона)'
    )
    social_links = GenericRelation(SocialLink, related_query_name = 'leader')


    def __str__(self):
        return self.fio

    class Meta:
        verbose_name = 'лидер (форума)'
        verbose_name_plural = 'лидер (форума)'
