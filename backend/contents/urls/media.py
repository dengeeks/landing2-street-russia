from django.urls import path

from contents.views.media import MediaDetailAPI

urlpatterns = [
    # Аккредитация для СМИ
    path('media/', MediaDetailAPI.as_view())
]
