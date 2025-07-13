from django import forms
from django.contrib import admin
from django.core.exceptions import ValidationError
from unfold.admin import ModelAdmin, TabularInline

from common.admin import LinkToDetailMixin
from tours.admin.participant import BlockParticipantGalleryInline
from tours.models.tour import Tour, TourCityActivity


class TourCityActivityInline(TabularInline):
    model = TourCityActivity
    extra = 1
    verbose_name = "Город и дата активности"
    verbose_name_plural = "Город и дата активности"
    autocomplete_fields = ['city']


class TourForm(forms.ModelForm):
    """Миксин для форм с медиа-контентом (изображение/видео)"""

    class Meta:
        model = Tour
        fields = '__all__'

    def clean(self):
        cleaned_data = super().clean()
        format_type = cleaned_data.get('format_type')
        video_url = cleaned_data.get('video_url')
        image = cleaned_data.get('image')

        format_type2 = cleaned_data.get('format_type2')
        video_url2 = cleaned_data.get('video_url2')
        image2 = cleaned_data.get('image2')

        if not any([video_url, image]):
            raise ValidationError('Необходимо добавить видео или изображение.')

        if format_type == 'video_url' and not video_url:
            raise ValidationError('Для типа "Видео" необходимо указать URL видео.')
        elif format_type2 == 'video_url' and not video_url2:
            raise ValidationError('Для типа "Видео" необходимо указать URL видео.')
        elif format_type == 'image' and not image:
            raise ValidationError('Для типа "Изображение" необходимо загрузить файл.')
        elif format_type2 == 'image' and not image2:
            raise ValidationError('Для типа "Изображение" необходимо загрузить файл.')
        return cleaned_data

    def save(self, commit = True):
        instance = super().save(commit = False)
        print(self.cleaned_data)

        if self.cleaned_data.get('format_type') == 'video_url' and instance.image:
            instance.image.delete(save = False)
            instance.image = None
        elif self.cleaned_data.get('format_type2') == 'video_url' and instance.image2:
            instance.image2.delete(save = False)
            instance.image2 = None
        elif self.cleaned_data.get('format_type') == 'image':
            instance.video_url = None
        elif self.cleaned_data.get('format_type2') == 'image2':
            instance.video_url2 = None

        if commit:
            instance.save()
            self.save_m2m()

        return instance


@admin.register(Tour)
class TourAdmin(LinkToDetailMixin, ModelAdmin):
    form = TourForm
    list_display = ['link_to_detail', 'title', 'address', 'starting_date', 'ending_date']
    readonly_fields = ['created_at', 'updated_at']
    compressed_fields = True
    fieldsets = (
        (
            "Основные поля",
            {
                "classes": ["tab"],
                "fields": [
                    'title',
                    'info',
                    'format_type',
                    'video_url',
                    'image',
                    'format_type2',
                    'video_url2',
                    'image2',
                    'starting_date',
                    'ending_date',
                ],
            },
        ),
        (
            "Адрес и локация",
            {
                "classes": ["tab"],
                "fields": [
                    'address',
                    'address_yandex',
                ],
            },
        ),
        (
            "Программа",
            {
                "classes": ["tab"],
                "fields": [
                    'place',
                    'target_audience',
                    'target',
                ],
            },
        ),
        (
            "Участники и руководство",
            {
                "classes": ["tab"],
                "fields": [
                    'info_participant',
                    'participant',
                    'moderator',
                    'leader',
                ],
            },
        ),
        (
            "Служебная информация",
            {
                "classes": ["tab"],
                "fields": [
                    'created_at',
                    'updated_at',
                ]
            },
        ),
    )
    inlines = [BlockParticipantGalleryInline, TourCityActivityInline]
    autocomplete_fields = ['moderator', 'leader', 'participant']

    def has_add_permission(self, request):
        return not Tour.objects.exists()

    class Media:
        js = ('js/join_street_form.js',)
