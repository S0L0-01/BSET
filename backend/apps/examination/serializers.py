from rest_framework import serializers
from .models import ExamNotice, OfficialDownload

class ExamNoticeSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)

    class Meta:
        model = ExamNotice
        fields = '__all__'

class OfficialDownloadSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)

    class Meta:
        model = OfficialDownload
        fields = '__all__'
