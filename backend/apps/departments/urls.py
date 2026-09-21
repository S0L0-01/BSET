from django.urls import path
from .views import (
    DepartmentListView,
    DepartmentDetailView,
    LabListView,
    FacultyListView,
)

urlpatterns = [
    path('', DepartmentListView.as_view(), name='department-list'),
    path('labs/', LabListView.as_view(), name='lab-list'),
    path('faculty/', FacultyListView.as_view(), name='faculty-list'),
    path('<slug:slug>/', DepartmentDetailView.as_view(), name='department-detail'),
]
