from rest_framework import generics, status
from rest_framework.response import Response
from .models import AdmissionEnquiry, EligibilityCriterion, DocumentRequirement
from .serializers import (
    AdmissionEnquirySerializer,
    EligibilityCriterionSerializer,
    DocumentRequirementSerializer,
)

class AdmissionEnquiryCreateView(generics.CreateAPIView):
    queryset = AdmissionEnquiry.objects.all()
    serializer_class = AdmissionEnquirySerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response({
            "status": "success",
            "message": "Your admission enquiry has been successfully submitted! Our admission team will contact you shortly.",
            "data": serializer.data
        }, status=status.HTTP_201_CREATED, headers=headers)

class EligibilityCriterionListView(generics.ListAPIView):
    queryset = EligibilityCriterion.objects.all()
    serializer_class = EligibilityCriterionSerializer

class DocumentRequirementListView(generics.ListAPIView):
    queryset = DocumentRequirement.objects.all()
    serializer_class = DocumentRequirementSerializer
