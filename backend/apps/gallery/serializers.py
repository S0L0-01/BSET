from rest_framework import serializers
from .models import GalleryCategory, GalleryMedia

class GalleryMediaSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    category_slug = serializers.CharField(source='category.slug', read_only=True)

    class Meta:
        model = GalleryMedia
        fields = '__all__'

class GalleryCategorySerializer(serializers.ModelSerializer):
    media_count = serializers.IntegerField(source='media_items.count', read_only=True)

    class Meta:
        model = GalleryCategory
        fields = ['id', 'name', 'slug', 'description', 'cover_image', 'order', 'media_count']
