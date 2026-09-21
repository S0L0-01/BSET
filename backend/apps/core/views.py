from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import CollegeInfo, Statistic, LeadershipMessage, ValueMission, Facility, ContactMessage
from .serializers import (
    CollegeInfoSerializer,
    StatisticSerializer,
    LeadershipMessageSerializer,
    ValueMissionSerializer,
    FacilitySerializer,
    ContactMessageSerializer,
)

class CollegeInfoView(APIView):
    def get(self, request):
        info = CollegeInfo.objects.first()
        if not info:
            info = CollegeInfo.objects.create()
        serializer = CollegeInfoSerializer(info)
        return Response(serializer.data)

class StatisticListView(generics.ListAPIView):
    queryset = Statistic.objects.all()
    serializer_class = StatisticSerializer

class LeadershipMessageListView(generics.ListAPIView):
    queryset = LeadershipMessage.objects.all()
    serializer_class = LeadershipMessageSerializer

class ValueMissionListView(generics.ListAPIView):
    queryset = ValueMission.objects.all()
    serializer_class = ValueMissionSerializer

class FacilityListView(generics.ListAPIView):
    queryset = Facility.objects.all()
    serializer_class = FacilitySerializer

class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response({
            "status": "success",
            "message": "Thank you! Your message has been received by BSET administration.",
            "data": serializer.data
        }, status=status.HTTP_201_CREATED, headers=headers)
