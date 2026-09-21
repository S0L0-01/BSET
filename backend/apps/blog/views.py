from rest_framework import generics
from .models import NewsEvent
from .serializers import NewsEventSerializer

class NewsEventListView(generics.ListAPIView):
    serializer_class = NewsEventSerializer

    def get_queryset(self):
        queryset = NewsEvent.objects.filter(is_published=True)
        category = self.request.query_params.get('category')
        if category:
            queryset = queryset.filter(category=category)
        featured = self.request.query_params.get('featured')
        if featured == 'true':
            queryset = queryset.filter(is_featured=True)
        return queryset

class NewsEventDetailView(generics.RetrieveAPIView):
    queryset = NewsEvent.objects.filter(is_published=True)
    serializer_class = NewsEventSerializer
    lookup_field = 'slug'
