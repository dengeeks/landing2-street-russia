from django.contrib import admin
from unfold.admin import ModelAdmin

from common.admin import LinkToDetailMixin
from contents.models.discipline import Discipline


@admin.register(Discipline)
class DisciplineAdmin(LinkToDetailMixin, ModelAdmin):
    """
    Класс администратора для модели Discipline.
    """
    fields = ['title', 'created_at', 'updated_at']
    list_display = ['link_to_detail', 'title', 'created_at', 'updated_at']
    readonly_fields = ['created_at', 'updated_at', 'link_to_detail']
