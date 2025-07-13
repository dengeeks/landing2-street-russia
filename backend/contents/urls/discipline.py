from django.urls import path

from contents.views.discipline import DisciplineAPI

urlpatterns = [
    # дисциплины
    path('list/discipline/', DisciplineAPI.as_view()),
]
