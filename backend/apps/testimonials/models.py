from django.db import models


class Testimonial(models.Model):
    ROLE_CHOICES = (
        ('student', 'Current Student'),
        ('alumni', 'Alumni'),
        ('parent', 'Parent'),
        ('recruiter', 'Recruiter'),
    )
    name = models.CharField(max_length=150)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='alumni')
    designation = models.CharField(max_length=150, blank=True)
    department = models.CharField(max_length=100, blank=True)
    photo_url = models.CharField(max_length=255, blank=True)
    quote = models.TextField()
    rating = models.PositiveSmallIntegerField(default=5)
    is_featured = models.BooleanField(default=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', 'name']

    def __str__(self):
        return f"{self.name} ({self.get_role_display()})"
