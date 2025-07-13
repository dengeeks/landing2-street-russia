from django.contrib.contenttypes.fields import GenericRelation
from django.db import models

from tours.models.base import PersonBase
from tours.models.social import SocialLink


class Moderator(PersonBase):
    """
        Модель для блока "Модераторы и эксперты"

    Наследует:
        - PersonBase: общие поля для участников (fio, email, phone, address, image).

    Поля:
        desc (TextField): Описание цели
        image (CharField):  Изображение

    Мета:
        verbose_name = един. число название модели
        verbose_name_plural = мн. число название модели

    Методы:
        __str__(): Возвращает строковое представление.
    """

    type = models.CharField(
        verbose_name = 'Тип',
        max_length = 100
    )

    desc = models.TextField(
        verbose_name = 'Описание'
    )
    social_links = GenericRelation(SocialLink, related_query_name = 'moderator')

    def __str__(self):
        return self.fio

    class Meta:
        verbose_name = 'модераторы и эксперты'
        verbose_name_plural = 'модераторы и эксперты'
