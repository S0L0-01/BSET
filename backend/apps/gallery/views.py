from rest_framework import generics
from .models import GalleryCategory, GalleryMedia
from .serializers import GalleryCategorySerializer, GalleryMediaSerializer

class GalleryCategoryListView(generics.ListAPIView):
    queryset = GalleryCategory.objects.all()
    serializer_class = GalleryCategorySerializer

class GalleryMediaListView(generics.ListAPIView):
    serializer_class = GalleryMediaSerializer

    def get_queryset(self):
        queryset = GalleryMedia.objects.all()
        category_slug = self.request.query_params.get('category')
        if category_slug:
            queryset = queryset.filter(category__slug=category_slug)
        featured = self.request.query_params.get('featured')
        if featured == 'true':
            queryset = queryset.filter(is_featured=True)
        return queryset
