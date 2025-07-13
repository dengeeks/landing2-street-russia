from django.db import models

from common.models import DateTimeMixin, SingleInstanceMixin


class Media(DateTimeMixin, SingleInstanceMixin):
    """
        Модель для блока "Аккредитация для СМИ"

    Наследование:
        - DateTimeMixin - миксин для наследования даты создания и обновления
        - SingleInstanceMixin - Ограничение до 1 обьекта модели

    Поля:
        - title (CharField): Заголовок
        - date (CharField): Дата
        - email (CharField): Почта
        - fio (CharField): Имя - фамилия

    Мета:
        verbose_name = един. число название модели
        verbose_name_plural = мн. число название модели

    Методы:
        __str__(): Возвращает строковое представление
    """
    title = models.CharField(
        verbose_name = 'Заголовок',
        max_length = 50,
        help_text = 'Заголовок для блока "Аккредитация для СМИ" (можно поменять)'
    )
    date = models.CharField(
        verbose_name = 'Дата',
        max_length = 50,
        help_text = 'Дата (до 22 октября 18:00)'
    )
    email = models.CharField(
        verbose_name = 'Почта',
        max_length = 50,
        help_text = 'Почта (info@streetrussia.ru)'
    )
    fio = models.CharField(
        verbose_name = 'Имя - фамилия',
        max_length = 65,
        help_text = 'Имя - фамилия (Елизавета Сырыгина)'
    )

    def __str__(self):
        return 'Детали'

    class Meta:
        verbose_name = 'блок Аккредитация для СМИ'
        verbose_name_plural = 'блок Аккредитация для СМИ'
