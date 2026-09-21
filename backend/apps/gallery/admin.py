from django.contrib import admin
from .models import GalleryCategory, GalleryMedia

class GalleryMediaInline(admin.TabularInline):
    model = GalleryMedia
    extra = 2

@admin.register(GalleryCategory)
class GalleryCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'order')
    prepopulated_fields = {'slug': ('name',)}
    list_editable = ('order',)
    inlines = [GalleryMediaInline]

@admin.register(GalleryMedia)
class GalleryMediaAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'is_featured', 'order')
    list_filter = ('category', 'is_featured')
    list_editable = ('is_featured', 'order')
    search_fields = ('title', 'caption')
