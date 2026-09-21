from rest_framework import serializers
from django.contrib.auth.models import User
from .models import StaffProfile


class StaffProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = StaffProfile
        fields = ['role', 'designation', 'phone', 'department_code']


class MeSerializer(serializers.ModelSerializer):
    staff_profile = StaffProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'is_staff', 'is_superuser', 'staff_profile']
