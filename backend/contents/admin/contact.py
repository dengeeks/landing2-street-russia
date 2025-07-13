from django.contrib import admin
from unfold.admin import ModelAdmin

from common.admin import LinkToDetailMixin, NoAddDeleteMixin
from contents.models.contact import ContactFooter, EmailPhoneFooter


@admin.register(ContactFooter)
class ContactFooterAdmin(LinkToDetailMixin, ModelAdmin):
    """
    Класс администратора для модели ContactFooter.
    """
    fields = ['url', 'image', 'created_at', 'updated_at']
    list_display = ['link_to_detail', 'url', 'created_at', 'updated_at']
    readonly_fields = ['link_to_detail', 'created_at', 'updated_at']


@admin.register(EmailPhoneFooter)
class EmailFooterAdmin(LinkToDetailMixin, NoAddDeleteMixin, ModelAdmin):
    """
    Класс администратора для модели EmailPhoneFooter.
    """
    fields = ['email', 'phone', 'created_at', 'updated_at']
    list_display = ['link_to_detail', 'email', 'phone', 'created_at', 'updated_at']
    readonly_fields = ['link_to_detail', 'created_at', 'updated_at']
