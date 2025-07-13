from django import forms
from django.core.exceptions import ValidationError
from django.urls import reverse
from django.utils.html import format_html


class NoAddDeleteMixin:
    """
    Миксин для Django admin, запрещающий добавление и удаление объектов.
    """

    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj = None):
        return False


class LinkToDetailMixin:
    """
    Миксин для добавления метода link_to_detail,
    который выводит ссылку на страницу редактирования объекта в админке.
    """

    def link_to_detail(self, obj):
        model_opts = obj._meta
        url = reverse(f'admin:{model_opts.app_label}_{model_opts.model_name}_change', args = [obj.pk])
        return format_html('<a href="{}">Перейти в детали</a>', url)

    link_to_detail.short_description = 'Детали'


class MediaContentFormMixin(forms.ModelForm):
    """Миксин для форм с медиа-контентом (изображение/видео)"""

    class Meta:
        abstract = True

    def clean(self):
        cleaned_data = super().clean()
        format_type = cleaned_data.get('format_type')
        video_url = cleaned_data.get('video_url')
        image = cleaned_data.get('image')

        if not any([video_url, image]):
            raise ValidationError('Необходимо добавить видео или изображение.')

        if format_type == 'video_url' and not video_url:
            raise ValidationError('Для типа "Видео" необходимо указать URL видео.')
        elif format_type == 'image' and not image:
            raise ValidationError('Для типа "Изображение" необходимо загрузить файл.')

        return cleaned_data

    def save(self, commit = True):
        instance = super().save(commit = False)

        if self.cleaned_data.get('format_type') == 'video_url' and instance.image:
            instance.image.delete(save = False)
            instance.image = None
        elif self.cleaned_data.get('format_type') == 'image':
            instance.video_url = None

        if commit:
            instance.save()
            self.save_m2m()

        return instance
