from django.contrib import admin
from .models import RecruiterCompany, PlacementStatistic, CRTModule

@admin.register(RecruiterCompany)
class RecruiterCompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'sector', 'is_top_recruiter', 'order')
    list_filter = ('is_top_recruiter', 'sector')
    list_editable = ('is_top_recruiter', 'order')
    search_fields = ('name', 'sector')

@admin.register(PlacementStatistic)
class PlacementStatisticAdmin(admin.ModelAdmin):
    list_display = ('academic_year', 'students_eligible', 'students_placed', 'companies_visited', 'highest_package_lpa', 'average_package_lpa')
    list_editable = ('students_eligible', 'students_placed', 'companies_visited', 'highest_package_lpa', 'average_package_lpa')

@admin.register(CRTModule)
class CRTModuleAdmin(admin.ModelAdmin):
    list_display = ('title', 'duration_hours', 'order')
    list_editable = ('duration_hours', 'order')
