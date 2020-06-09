from django import forms
from candidateRegistrationApp.models import Registration


class RegistrationForm(forms.ModelForm):
    user_password = forms.CharField(widget=forms.PasswordInput)
    class Meta:
        model = Registration
        fields = '__all__'