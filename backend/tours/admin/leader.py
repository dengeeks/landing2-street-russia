from django.contrib import admin
from unfold.admin import ModelAdmin

from common.admin import LinkToDetailMixin
from tours.admin.social import SocialLinkManagerInline
from tours.models.leader import Leader


@admin.register(Leader)
class LeaderAdmin(LinkToDetailMixin, ModelAdmin):
    list_display = ['link_to_detail', 'fio', 'title', 'email', 'address', 'created_at']
    search_fields = ['fio', 'email', 'address']

    readonly_fields = ['link_to_detail', 'created_at', 'updated_at']

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
