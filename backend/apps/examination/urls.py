from django.urls import path
from .views import ExamNoticeListView, OfficialDownloadListView

urlpatterns = [
    path('notices/', ExamNoticeListView.as_view(), name='exam-notices-list'),
    path('downloads/', OfficialDownloadListView.as_view(), name='official-downloads-list'),
]
