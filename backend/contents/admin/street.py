from django.contrib import admin
from unfold.admin import ModelAdmin

from common.admin import LinkToDetailMixin, NoAddDeleteMixin
from contents.models.street import Street


@admin.register(Street)
class StreetAdmin(LinkToDetailMixin, NoAddDeleteMixin, ModelAdmin):
    """
    Класс администратора для модели Street.
    """
    fields = ['text', 'created_at', 'updated_at']
    list_display = ['link_to_detail', 'text', 'created_at', 'updated_at']
    readonly_fields = ['link_to_detail', 'created_at', 'updated_at']
