from django.contrib import admin
from .models import StaffProfile


@admin.register(StaffProfile)
class StaffProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'role', 'designation', 'phone', 'department_code')
    list_filter = ('role',)
    search_fields = ('user__username', 'user__email', 'designation', 'phone')
