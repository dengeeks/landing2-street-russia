from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView, SpectacularRedocView

urlpatterns = [
    path('admin/', admin.site.urls),

    # API
    # path('api/v1/', include('contents.urls')),
    # path('api/v1/', include('partners.urls')),
    path('api/v1/', include('tours.urls')),
    # path('api/v1/', include('feedbacks.urls')),

    # DRF SPECTACULAR
    path('api/v1/schema/', SpectacularAPIView.as_view(), name = 'schema'),
    path('api/v1/schema/swagger-ui/', SpectacularSwaggerView.as_view(url_name = 'schema'), name = 'swagger-ui'),
    path('api/v1/schema/redoc/', SpectacularRedocView.as_view(url_name = 'schema'), name = 'redoc'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
    urlpatterns += path('__debug__/', include('debug_toolbar.urls')),