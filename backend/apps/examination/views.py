from rest_framework import generics
from .models import ExamNotice, OfficialDownload
from .serializers import ExamNoticeSerializer, OfficialDownloadSerializer

class ExamNoticeListView(generics.ListAPIView):
    serializer_class = ExamNoticeSerializer

    def get_queryset(self):
        queryset = ExamNotice.objects.filter(is_active=True)
        category = self.request.query_params.get('category')
        if category:
            queryset = queryset.filter(category=category)
        return queryset

class OfficialDownloadListView(generics.ListAPIView):
    serializer_class = OfficialDownloadSerializer

    def get_queryset(self):
        queryset = OfficialDownload.objects.all()
        category = self.request.query_params.get('category')
        if category:
            queryset = queryset.filter(category=category)
        return queryset
