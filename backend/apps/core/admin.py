from django.contrib import admin
from .models import CollegeInfo, Statistic, LeadershipMessage, ValueMission, Facility, ContactMessage

@admin.register(CollegeInfo)
class CollegeInfoAdmin(admin.ModelAdmin):
    list_display = ('name', 'det_code', 'college_code', 'primary_phone', 'email')

@admin.register(Statistic)
class StatisticAdmin(admin.ModelAdmin):
    list_display = ('label', 'value', 'prefix', 'suffix', 'order')
    list_editable = ('value', 'order')

@admin.register(LeadershipMessage)
class LeadershipMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'designation', 'order')
    list_editable = ('order',)

@admin.register(ValueMission)
class ValueMissionAdmin(admin.ModelAdmin):
    list_display = ('title', 'item_type', 'order')
    list_filter = ('item_type',)
    list_editable = ('order',)

@admin.register(Facility)
class FacilityAdmin(admin.ModelAdmin):
    list_display = ('title', 'order')
    list_editable = ('order',)

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'subject', 'created_at', 'is_resolved')
    list_filter = ('is_resolved', 'created_at')
    search_fields = ('name', 'email', 'phone', 'subject', 'message')
    readonly_fields = ('created_at',)
