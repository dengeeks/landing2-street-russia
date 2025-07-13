from django.contrib import admin
from unfold.admin import GenericTabularInline, ModelAdmin

from common.admin import LinkToDetailMixin
from tours.models.social import SocialLink, SocialMedia


@admin.register(SocialMedia)
class SocialMediaManagerAdmin(LinkToDetailMixin, ModelAdmin):
    fields = ['name', 'image', 'created_at', 'updated_at']
    list_display = ['link_to_detail', 'name', 'created_at', 'updated_at']
    readonly_fields = ['link_to_detail', 'created_at', 'updated_at']
    search_fields = ['name']


class SocialLinkManagerInline(GenericTabularInline):
    model = SocialLink
    extra = 1
    fields = ['social_media', 'url']
    verbose_name_plural = "Социальные сети"
