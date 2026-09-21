from django.urls import path
from .views import NewsEventListView, NewsEventDetailView

urlpatterns = [
    path('', NewsEventListView.as_view(), name='news-event-list'),
    path('<slug:slug>/', NewsEventDetailView.as_view(), name='news-event-detail'),
]
