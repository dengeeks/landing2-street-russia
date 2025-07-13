from django.contrib import admin
from unfold.admin import ModelAdmin

from common.admin import LinkToDetailMixin, NoAddDeleteMixin
from contents.models.media import Media


@admin.register(Media)
class MediaAdmin(LinkToDetailMixin, NoAddDeleteMixin, ModelAdmin):
    """
    Класс администратора для модели Media.
    """
    fields = ['title', 'date', 'email', 'fio', 'created_at', 'updated_at']
    list_display = ['link_to_detail', 'title', 'date', 'email', 'fio', 'created_at', 'updated_at']
    readonly_fields = ['link_to_detail', 'created_at', 'updated_at']
