from django.contrib import admin
from .models import Testimonial


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'department', 'rating', 'is_featured', 'order')
    list_filter = ('role', 'is_featured', 'department')
    list_editable = ('is_featured', 'order', 'rating')
    search_fields = ('name', 'quote', 'designation', 'department')
