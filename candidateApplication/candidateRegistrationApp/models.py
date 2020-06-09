from django.db import models

# Create your models here.

INTERESTED_IN = [
    ('Mobile Apps', 'Mobile Apps'),
    ('Web Development', 'Web Development'),
    ('E-commerce', 'E-commerce'),
    ('UI /UX', 'UI /UX'),
    ('Digital Marketing', 'Digital Marketing'),
    ('Testing & Quality assurance', 'Testing & Quality assurance')
]


EXPERIENCE = [
    ('Fresher', 'Fresher'),
    ('Experienced', 'Experienced'),
   
]


class Registration(models.Model):
    register_id = models.AutoField(primary_key=True,editable=False)
    user_name = models.CharField(max_length=30)
    user_email = models.EmailField()
    user_phone = models.CharField(max_length=12)
    user_bdate = models.DateField(auto_now=False, auto_now_add=False)
    user_password = models.CharField(max_length=50)
    user_interested_in = models.CharField(max_length=30,choices=INTERESTED_IN)
    user_city = models.CharField(max_length=50)
    user_experience = models.CharField(max_length=20 ,choices=EXPERIENCE)
    nda =  models.BooleanField('NDA', default=True)
    user_image= models.ImageField()
    resumefile = models.FileField()
    addmin_note = models.TextField()
    register_date = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return "%s %s %s" % (self.register_id, self.user_name, self.register_date)
