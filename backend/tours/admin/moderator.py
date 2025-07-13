from django.contrib import admin
from unfold.admin import ModelAdmin

from tours.admin.social import SocialLinkManagerInline
from tours.models.moderator import Moderator


@admin.register(Moderator)
class ModeratorAdmin(ModelAdmin):
    list_display = ['fio', 'type', 'email', 'address', 'created_at']
    search_fields = ['fio', 'email', 'type', 'address']

    readonly_fields = ['created_at', 'updated_at']

    fieldsets = [
        ['Основная информация', {
            'fields': ['fio', 'type', 'image', 'desc']
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
