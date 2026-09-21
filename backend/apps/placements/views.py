from rest_framework import generics
from .models import RecruiterCompany, PlacementStatistic, CRTModule
from .serializers import (
    RecruiterCompanySerializer,
    PlacementStatisticSerializer,
    CRTModuleSerializer,
)

class RecruiterCompanyListView(generics.ListAPIView):
    queryset = RecruiterCompany.objects.all()
    serializer_class = RecruiterCompanySerializer

class PlacementStatisticListView(generics.ListAPIView):
    queryset = PlacementStatistic.objects.all()
    serializer_class = PlacementStatisticSerializer

class CRTModuleListView(generics.ListAPIView):
    queryset = CRTModule.objects.all()
    serializer_class = CRTModuleSerializer
