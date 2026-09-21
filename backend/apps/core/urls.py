from django.urls import path
from .views import (
    CollegeInfoView,
    StatisticListView,
    LeadershipMessageListView,
    ValueMissionListView,
    FacilityListView,
    ContactMessageCreateView,
)

urlpatterns = [
    path('info/', CollegeInfoView.as_view(), name='college-info'),
    path('stats/', StatisticListView.as_view(), name='stats-list'),
    path('leadership/', LeadershipMessageListView.as_view(), name='leadership-list'),
    path('values-mission/', ValueMissionListView.as_view(), name='values-mission-list'),
    path('facilities/', FacilityListView.as_view(), name='facilities-list'),
    path('contact-us/', ContactMessageCreateView.as_view(), name='contact-us-create'),
]
