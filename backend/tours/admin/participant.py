from django.contrib import admin
from unfold.admin import ModelAdmin, TabularInline

from tours.admin.social import SocialLinkManagerInline
from tours.models.participant import Participant, BlockParticipantGallery


class BlockParticipantGalleryInline(TabularInline):
    model = BlockParticipantGallery
    min_num = 4
    max_num = 4
    verbose_name = "Изображение галереи"
    verbose_name_plural = "Галерея участников"


@admin.register(Participant)
class ParticipantAdmin(ModelAdmin):
    list_display = ['fio', 'title', 'email', 'address', 'created_at']
    search_fields = ['fio', 'email', 'address']

    readonly_fields = ['created_at', 'updated_at']

    fieldsets = [
        ['Основная информация', {
            'fields': ['title', 'fio', 'image']
        }],
        ['Контакты', {
            'fields': ['email', 'phone', 'address']
        }],
        ['Служебная информация', {
            'fields': ['created_at', 'updated_at']
        }],
    ]
    compressed_fields = True
    inlines = [SocialLinkManagerInline]
