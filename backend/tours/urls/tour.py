from django.urls import path

from tours.views.tour import TourDetailAPI, TourAPI

urlpatterns = [
    # получение партнеров
    path('tour/', TourAPI.as_view()),
    path('detail/tour/', TourDetailAPI.as_view())
]
