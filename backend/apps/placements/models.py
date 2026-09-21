from django.db import models

class RecruiterCompany(models.Model):
    name = models.CharField(max_length=150)
    logo_url = models.CharField(max_length=255, blank=True)
    sector = models.CharField(max_length=100, default="Manufacturing & Engineering")
    is_top_recruiter = models.BooleanField(default=True)
    order = models.IntegerField(default=0)

    class Meta:
        verbose_name_plural = "Recruiter Companies"
        ordering = ['order', 'name']

    def __str__(self):
        return self.name

class PlacementStatistic(models.Model):
    academic_year = models.CharField(max_length=50)
    students_eligible = models.IntegerField(default=350)
    students_placed = models.IntegerField(default=300)
    companies_visited = models.IntegerField(default=38)
    highest_package_lpa = models.DecimalField(max_digits=5, decimal_places=2, default=4.80)
    average_package_lpa = models.DecimalField(max_digits=5, decimal_places=2, default=2.80)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['-academic_year']

    def __str__(self):
        return f"Placements {self.academic_year}: {self.students_placed} Placed ({self.companies_visited} Companies)"

class CRTModule(models.Model):
    title = models.CharField(max_length=150)
    duration_hours = models.IntegerField(default=40)
    description = models.TextField()
    key_topics = models.TextField()
    order = models.IntegerField(default=0)

    class Meta:
        verbose_name = "CRT Module"
        verbose_name_plural = "CRT Modules"
        ordering = ['order']

    def __str__(self):
        return self.title
