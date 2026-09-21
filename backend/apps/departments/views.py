from rest_framework import generics
from .models import Department, Lab, Faculty
from .serializers import (
    DepartmentListSerializer,
    DepartmentDetailSerializer,
    LabSerializer,
    FacultySerializer,
)

class DepartmentListView(generics.ListAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentListSerializer

class DepartmentDetailView(generics.RetrieveAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentDetailSerializer
    lookup_field = 'slug'

class LabListView(generics.ListAPIView):
    serializer_class = LabSerializer

    def get_queryset(self):
        dept_slug = self.request.query_params.get('department')
        if dept_slug:
            return Lab.objects.filter(department__slug=dept_slug)
        return Lab.objects.all()

class FacultyListView(generics.ListAPIView):
    serializer_class = FacultySerializer

    def get_queryset(self):
        dept_slug = self.request.query_params.get('department')
        if dept_slug:
            return Faculty.objects.filter(department__slug=dept_slug)
        return Faculty.objects.all()
