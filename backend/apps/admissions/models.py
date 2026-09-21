from django.db import models

class AdmissionEnquiry(models.Model):
    STATUS_CHOICES = (
        ('new', 'New Enquiry'),
        ('contacted', 'Contacted / Follow Up'),
        ('admitted', 'Admitted'),
        ('closed', 'Closed'),
    )
    full_name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    parent_phone = models.CharField(max_length=20, blank=True)
    state = models.CharField(max_length=100, default="Odisha")
    city = models.CharField(max_length=100, blank=True)
    department_interest = models.CharField(max_length=100, default="Mechanical Engineering")
    tenth_percentage = models.CharField(max_length=20, blank=True)
    message = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Admission Enquiries"
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.full_name} ({self.department_interest}) - {self.phone}"

class EligibilityCriterion(models.Model):
    category = models.CharField(max_length=100, default="1st Year Diploma Entry")
    criteria = models.TextField()
    order = models.IntegerField(default=0)

    class Meta:
        verbose_name_plural = "Eligibility Criteria"
        ordering = ['order']

    def __str__(self):
        return f"{self.category}: {self.criteria[:50]}"

class DocumentRequirement(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    is_mandatory = models.BooleanField(default=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title
