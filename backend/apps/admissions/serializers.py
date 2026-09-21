from rest_framework import serializers
from .models import AdmissionEnquiry, EligibilityCriterion, DocumentRequirement

class AdmissionEnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = AdmissionEnquiry
        fields = '__all__'
        read_only_fields = ['id', 'created_at', 'status']

class EligibilityCriterionSerializer(serializers.ModelSerializer):
    class Meta:
        model = EligibilityCriterion
        fields = '__all__'

class DocumentRequirementSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentRequirement
        fields = '__all__'
