from django.db import models

class GalleryCategory(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    cover_image = models.CharField(max_length=255, blank=True)
    order = models.IntegerField(default=0)

    class Meta:
        verbose_name_plural = "Gallery Categories"
        ordering = ['order', 'name']

    def __str__(self):
        return self.name

class GalleryMedia(models.Model):
    category = models.ForeignKey(GalleryCategory, related_name='media_items', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    image_url = models.CharField(max_length=255)
    caption = models.CharField(max_length=255, blank=True)
    is_featured = models.BooleanField(default=False)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Gallery Photo/Media"
        verbose_name_plural = "Gallery Photos/Media"
        ordering = ['order', '-created_at']

    def __str__(self):
        return f"{self.title} ({self.category.name})"
