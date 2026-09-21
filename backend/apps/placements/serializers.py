from rest_framework import serializers
from .models import RecruiterCompany, PlacementStatistic, CRTModule

class RecruiterCompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = RecruiterCompany
        fields = '__all__'

class PlacementStatisticSerializer(serializers.ModelSerializer):
    placement_rate = serializers.SerializerMethodField()

    class Meta:
        model = PlacementStatistic
        fields = '__all__'

    def get_placement_rate(self, obj):
        if obj.students_eligible > 0:
            return round((obj.students_placed / obj.students_eligible) * 100, 1)
        return 0

class CRTModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = CRTModule
        fields = '__all__'
