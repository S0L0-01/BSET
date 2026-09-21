from django.urls import path
from .views import (
    RecruiterCompanyListView,
    PlacementStatisticListView,
    CRTModuleListView,
)

urlpatterns = [
    path('recruiters/', RecruiterCompanyListView.as_view(), name='recruiter-list'),
    path('stats/', PlacementStatisticListView.as_view(), name='placement-stats-list'),
    path('crt-modules/', CRTModuleListView.as_view(), name='crt-modules-list'),
]
