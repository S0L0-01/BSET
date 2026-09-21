from django.contrib import admin
from .models import NewsEvent

@admin.register(NewsEvent)
class NewsEventAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'event_date', 'is_featured', 'is_published')
    list_filter = ('category', 'is_featured', 'is_published', 'event_date')
    search_fields = ('title', 'summary', 'content')
    prepopulated_fields = {'slug': ('title',)}
    list_editable = ('is_featured', 'is_published')
