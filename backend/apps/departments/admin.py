from django.contrib import admin
from .models import Department, Lab, Faculty, DepartmentHighlight

class LabInline(admin.TabularInline):
    model = Lab
    extra = 1

class FacultyInline(admin.TabularInline):
    model = Faculty
    extra = 1

class DepartmentHighlightInline(admin.TabularInline):
    model = DepartmentHighlight
    extra = 1

@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('name', 'code', 'intake', 'duration', 'established_year', 'order')
    prepopulated_fields = {'slug': ('name',)}
    list_editable = ('order',)
    inlines = [DepartmentHighlightInline, LabInline, FacultyInline]

@admin.register(Lab)
class LabAdmin(admin.ModelAdmin):
    list_display = ('name', 'department', 'order')
    list_filter = ('department',)
    list_editable = ('order',)

@admin.register(Faculty)
class FacultyAdmin(admin.ModelAdmin):
    list_display = ('name', 'department', 'designation', 'qualification', 'order')
    list_filter = ('department', 'designation')
    list_editable = ('order',)

@admin.register(DepartmentHighlight)
class DepartmentHighlightAdmin(admin.ModelAdmin):
    list_display = ('title', 'department', 'order')
    list_filter = ('department',)
    list_editable = ('order',)
