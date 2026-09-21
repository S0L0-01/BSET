from rest_framework import serializers
from .models import Department, Lab, Faculty, DepartmentHighlight

class LabSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lab
        fields = '__all__'

class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = '__all__'

class DepartmentHighlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = DepartmentHighlight
        fields = '__all__'

class DepartmentListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'name', 'slug', 'code', 'duration', 'intake', 'intake_details', 'established_year', 'overview', 'icon', 'order']

class DepartmentDetailSerializer(serializers.ModelSerializer):
    labs = LabSerializer(many=True, read_only=True)
    faculty_members = FacultySerializer(many=True, read_only=True)
    highlights = DepartmentHighlightSerializer(many=True, read_only=True)

    class Meta:
        model = Department
        fields = '__all__'
