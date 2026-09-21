from django.urls import path
from .views import GalleryCategoryListView, GalleryMediaListView

urlpatterns = [
    path('categories/', GalleryCategoryListView.as_view(), name='gallery-categories-list'),
    path('media/', GalleryMediaListView.as_view(), name='gallery-media-list'),
]
