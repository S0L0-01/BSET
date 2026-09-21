from django.db import models

class ExamNotice(models.Model):
    CATEGORY_CHOICES = (
        ('exam', 'Examination Schedule'),
        ('result', 'Result Notification'),
        ('timetable', 'Academic Timetable'),
        ('registration', 'Registration & Form Fillup'),
        ('general', 'General Notice'),
    )
    title = models.CharField(max_length=255)
    notice_number = models.CharField(max_length=100, blank=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='exam')
    published_date = models.DateField()
    file_url = models.CharField(max_length=255, blank=True)
    is_important = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-published_date', '-created_at']

    def __str__(self):
        return f"[{self.get_category_display()}] {self.title}"

class OfficialDownload(models.Model):
    CATEGORY_CHOICES = (
        ('aicte', 'AICTE Approval Letters'),
        ('iso', 'ISO Certifications'),
        ('anti_ragging', 'Anti-Ragging Squad & Rules'),
        ('grievance', 'Grievance Redressed Committee'),
        ('syllabus', 'Syllabus & Lesson Plans'),
        ('proctorial', 'Proctorial Records'),
        ('other', 'Other Mandatory Disclosures'),
    )
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    academic_year = models.CharField(max_length=50, blank=True)
    file_url = models.CharField(max_length=255)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', 'title']

    def __str__(self):
        return f"{self.title} ({self.get_category_display()})"
