from django.urls import path

from contents.views.street import StreetAPI

urlpatterns = [
    # дисциплины
    path('street/', StreetAPI.as_view()),
]
