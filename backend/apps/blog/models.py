from django.db import models

class NewsEvent(models.Model):
    CATEGORY_CHOICES = (
        ('news', 'Latest News'),
        ('event', 'Campus Event'),
        ('workshop', 'Technical Workshop'),
        ('achievement', 'Student / Faculty Achievement'),
        ('circular', 'Official Circular'),
    )
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='news')
    summary = models.TextField()
    content = models.TextField()
    image_url = models.CharField(max_length=255, blank=True)
    event_date = models.DateField(null=True, blank=True)
    is_featured = models.BooleanField(default=False)
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "News & Event"
        verbose_name_plural = "News & Events"
        ordering = ['-event_date', '-created_at']

    def __str__(self):
        return f"[{self.get_category_display()}] {self.title}"
