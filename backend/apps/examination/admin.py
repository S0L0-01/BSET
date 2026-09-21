from django.contrib import admin
from .models import ExamNotice, OfficialDownload

@admin.register(ExamNotice)
class ExamNoticeAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'published_date', 'is_important', 'is_active')
    list_filter = ('category', 'is_important', 'is_active', 'published_date')
    search_fields = ('title', 'notice_number')
    list_editable = ('is_important', 'is_active')

@admin.register(OfficialDownload)
class OfficialDownloadAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'academic_year', 'order')
    list_filter = ('category',)
    list_editable = ('order',)
    search_fields = ('title',)
