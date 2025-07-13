from django.urls import path

from contents.views.contact import ContactFooterAPI, EmailPhoneFooterAPI

urlpatterns = [
    # контакты (соцсети)
    path('contact/', ContactFooterAPI.as_view()),
    # почта - номер (футер)
    path('email-phone/', EmailPhoneFooterAPI.as_view()),
]
