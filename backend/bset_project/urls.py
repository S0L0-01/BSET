from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def api_root(request):
    return Response({
        "message": "Welcome to Berhampur School of Engineering & Technology (BSET) REST API",
        "version": "1.0.0",
        "endpoints": {
            "core": "/api/core/",
            "departments": "/api/departments/",
            "admissions": "/api/admissions/",
            "placements": "/api/placements/",
            "examination": "/api/examination/",
            "gallery": "/api/gallery/",
            "blog": "/api/blog/",
            "testimonials": "/api/testimonials/",
            "accounts": "/api/accounts/",
            "token": "/api/token/",
            "token_refresh": "/api/token/refresh/",
        },
        "status": "online"
    })

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', api_root, name='api-root'),
    path('api/core/', include('apps.core.urls')),
    path('api/departments/', include('apps.departments.urls')),
    path('api/admissions/', include('apps.admissions.urls')),
    path('api/placements/', include('apps.placements.urls')),
    path('api/examination/', include('apps.examination.urls')),
    path('api/gallery/', include('apps.gallery.urls')),
    path('api/blog/', include('apps.blog.urls')),
    path('api/testimonials/', include('apps.testimonials.urls')),
    path('api/accounts/', include('apps.accounts.urls')),

    # JWT Authentication Endpoints
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
