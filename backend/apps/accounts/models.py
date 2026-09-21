from django.db import models


class StaffProfile(models.Model):
    ROLE_CHOICES = (
        ('admin', 'Administrator'),
        ('faculty', 'Faculty'),
        ('staff', 'Office Staff'),
    )
    user = models.OneToOneField('auth.User', related_name='staff_profile', on_delete=models.CASCADE)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='staff')
    designation = models.CharField(max_length=150, blank=True)
    phone = models.CharField(max_length=20, blank=True)
    department_code = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return f"{self.user.get_full_name() or self.user.username} ({self.get_role_display()})"
