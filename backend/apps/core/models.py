from django.db import models

class CollegeInfo(models.Model):
    name = models.CharField(max_length=255, default="Berhampur School of Engineering & Technology")
    short_name = models.CharField(max_length=50, default="BSET Berhampur")
    tagline = models.CharField(max_length=255, default="Empowering Engineering Minds for Tomorrow's Technology")
    established_year = models.IntegerField(default=2004)
    det_code = models.CharField(max_length=50, default="bset")
    college_code = models.CharField(max_length=50, default="786456")
    campus_area = models.CharField(max_length=50, default="5 Acres")
    address = models.TextField(default="Near Berhampur University, Ramachandrapur, Po-Dura, Berhampur, Ganjam, Odisha - 760010")
    primary_phone = models.CharField(max_length=50, default="+91-9437062282")
    secondary_phone = models.CharField(max_length=50, default="+91-8280730451")
    email = models.EmailField(default="bsetberhampur@gmail.com")
    website = models.URLField(default="https://bsetberhampur.ac.in")
    facebook_url = models.URLField(blank=True, default="https://www.facebook.com/BSET.BERHAMPUR/")
    youtube_url = models.URLField(blank=True, default="https://www.youtube.com/watch?v=oUfGFe3HOZc")

    class Meta:
        verbose_name = "College Profile"
        verbose_name_plural = "College Profile"

    def __str__(self):
        return self.name

class Statistic(models.Model):
    label = models.CharField(max_length=100)
    value = models.IntegerField()
    prefix = models.CharField(max_length=10, blank=True, default="")
    suffix = models.CharField(max_length=10, blank=True, default="+")
    icon = models.CharField(max_length=50, default="Award")
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.label}: {self.prefix}{self.value}{self.suffix}"

class LeadershipMessage(models.Model):
    LEADER_ROLES = (
        ('founder', 'Founder & Chairman'),
        ('principal', 'Principal'),
        ('director', 'Director'),
        ('secretary', 'Secretary'),
    )
    role = models.CharField(max_length=20, choices=LEADER_ROLES, unique=True)
    name = models.CharField(max_length=150)
    designation = models.CharField(max_length=150)
    photo_url = models.CharField(max_length=255, blank=True)
    message = models.TextField()
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.get_role_display()} - {self.name}"

class ValueMission(models.Model):
    TYPE_CHOICES = (
        ('values', 'Core Values'),
        ('vision', 'Our Vision'),
        ('mission', 'Our Mission'),
    )
    item_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    title = models.CharField(max_length=200)
    content = models.TextField()
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.get_item_type_display()} - {self.title}"

class Facility(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    icon = models.CharField(max_length=50, default="Building2")
    image_url = models.CharField(max_length=255, blank=True)
    order = models.IntegerField(default=0)

    class Meta:
        verbose_name_plural = "Facilities"
        ordering = ['order']

    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_resolved = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Message from {self.name} - {self.subject} ({self.created_at.strftime('%Y-%m-%d')})"
