from rest_framework import serializers
from .models import NewsEvent

class NewsEventSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)

    class Meta:
        model = NewsEvent
        fields = '__all__'
