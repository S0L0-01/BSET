from django.urls import path
from .views import (
    AdmissionEnquiryCreateView,
    EligibilityCriterionListView,
    DocumentRequirementListView,
)

urlpatterns = [
    path('enquiry/', AdmissionEnquiryCreateView.as_view(), name='admission-enquiry-create'),
    path('eligibility/', EligibilityCriterionListView.as_view(), name='eligibility-list'),
    path('documents/', DocumentRequirementListView.as_view(), name='documents-list'),
]
