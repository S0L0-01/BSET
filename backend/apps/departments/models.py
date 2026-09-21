from django.db import models

class Department(models.Model):
    name = models.CharField(max_length=150)
    slug = models.SlugField(max_length=100, unique=True)
    code = models.CharField(max_length=20)
    duration = models.CharField(max_length=50, default="3 Years (6 Semesters)")
    intake = models.IntegerField(default=60)
    intake_details = models.CharField(max_length=100, blank=True, default="")
    established_year = models.IntegerField(default=2008)
    overview = models.TextField()
    vision = models.TextField(blank=True)
    icon = models.CharField(max_length=50, default="Cpu")
    banner_image = models.CharField(max_length=255, blank=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', 'name']

    def __str__(self):
        return f"{self.name} ({self.code})"

class Lab(models.Model):
    department = models.ForeignKey(Department, related_name='labs', on_delete=models.CASCADE)
    name = models.CharField(max_length=150)
    description = models.TextField(blank=True)
    equipment_highlights = models.TextField(blank=True)
    image_url = models.CharField(max_length=255, blank=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.department.code} - {self.name}"

class Faculty(models.Model):
    department = models.ForeignKey(Department, related_name='faculty_members', on_delete=models.CASCADE)
    name = models.CharField(max_length=150)
    designation = models.CharField(max_length=100)
    qualification = models.CharField(max_length=150)
    experience_years = models.CharField(max_length=50, blank=True)
    specialization = models.CharField(max_length=150, blank=True)
    photo_url = models.CharField(max_length=255, blank=True)
    email = models.EmailField(blank=True)
    order = models.IntegerField(default=0)

    class Meta:
        verbose_name_plural = "Faculty Members"
        ordering = ['order']

    def __str__(self):
        return f"{self.name} ({self.designation} - {self.department.code})"

class DepartmentHighlight(models.Model):
    department = models.ForeignKey(Department, related_name='highlights', on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    description = models.TextField()
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.department.code} Highlight: {self.title}"
