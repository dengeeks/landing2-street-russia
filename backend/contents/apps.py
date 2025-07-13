from django.apps import AppConfig


class ContentsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'contents'
    verbose_name = 'Статика'

    def ready(self):
        import contents.signals  # noqa
