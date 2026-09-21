from django.contrib import admin
from .models import AdmissionEnquiry, EligibilityCriterion, DocumentRequirement

@admin.register(AdmissionEnquiry)
class AdmissionEnquiryAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'phone', 'department_interest', 'state', 'tenth_percentage', 'status', 'created_at')
    list_filter = ('status', 'department_interest', 'created_at')
    search_fields = ('full_name', 'email', 'phone', 'parent_phone', 'city')
    list_editable = ('status',)
    readonly_fields = ('created_at',)

@admin.register(EligibilityCriterion)
class EligibilityCriterionAdmin(admin.ModelAdmin):
    list_display = ('category', 'criteria', 'order')
    list_editable = ('order',)

@admin.register(DocumentRequirement)
class DocumentRequirementAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_mandatory', 'order')
    list_filter = ('is_mandatory',)
    list_editable = ('is_mandatory', 'order')
