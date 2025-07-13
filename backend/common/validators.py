import re

from django.core.exceptions import ValidationError


def validate_iframe(value):
    """
    Валидатор, проверяющий, что строка содержит тег <iframe>.
    Не проверяет содержимое атрибутов, только наличие самого iframe.
    """
    if not re.search(r'<iframe[^>]*>', value, re.IGNORECASE):
        raise ValidationError('Строка должна содержать HTML-тег <iframe>.')


def validate_phone_number(value):
    """
    Проверяет правильность введенного номера телефона.

    Параметры:
        value (str) - Номер телефона

    Исключения:
        ValidationError: Возникает в случае, если номер
        телефона не соответствует формату.
    """
    pattern = re.compile(r'^(?:\+7|7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$')
    if not pattern.match(value):
        raise ValidationError('Пожалуйста, введите правильный номер телефона')
