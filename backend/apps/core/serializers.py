from rest_framework import serializers
from .models import CollegeInfo, Statistic, LeadershipMessage, ValueMission, Facility, ContactMessage

class CollegeInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CollegeInfo
        fields = '__all__'

class StatisticSerializer(serializers.ModelSerializer):
    class Meta:
        model = Statistic
        fields = '__all__'

class LeadershipMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = LeadershipMessage
        fields = '__all__'

class ValueMissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ValueMission
        fields = '__all__'

class FacilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Facility
        fields = '__all__'

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'
        read_only_fields = ['id', 'created_at', 'is_resolved']
