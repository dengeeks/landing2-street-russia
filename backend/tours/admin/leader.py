from django.contrib import admin
from unfold.admin import ModelAdmin

from tours.admin.social import SocialLinkManagerInline
from tours.models.leader import Leader


@admin.register(Leader)
class LeaderAdmin(ModelAdmin):
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
