from django.shortcuts import render
from candidateRegistrationApp.forms import RegistrationForm
from candidateRegistrationApp.models import Registration

from django.http import HttpResponse


def index(request):

    if request.method == 'GET':
        return render(request, 'candidateRegistrationApp/index.html')

    elif request.method == 'POST':
        print("post request")
        print("in post request", request.POST)
        print(request.FILES)

        Registration_data = Registration.objects.create(
                user_name = request.POST['fname'],
                user_email = request.POST['mail'],
                user_phone = request.POST['phone'],
                user_bdate = request.POST['bdate'],
                user_password = request.POST['password'],
                user_interested_in = request.POST['sellist_tech'],
                user_city = request.POST['city'],
                user_experience = request.POST['sellist_exper'],
                nda = request.POST['registerNDA'],
                user_image= request.FILES['user_pic'],
                resumefile = request.FILES['user_resume'],
                
                )

        Registration_data.save()


        if request.FILES['user_pic']:
                with open('candidateRegistrationApp/static/candidateRegistrationApp/img/'+request.FILES['user_pic'].name, 'wb+') as destination:  
                    for chunk in request.FILES['user_pic'].chunks():  
                        destination.write(chunk)
                   
        if request.FILES['user_resume']:
            with open('candidateRegistrationApp/static/candidateRegistrationApp/documents/'+request.FILES['user_resume'].name, 'wb+') as destination:  
                for chunk in request.FILES['user_resume'].chunks():  
                    destination.write(chunk)
                   
            
        return render(request, 'candidateRegistrationApp/index.html')
        
   
def adminView(request):

    if request.method == 'GET':
        
        userRegData = Registration.objects.all()
        
            
        return render(request, 'candidateRegistrationApp/admin.html', {'userRegData': userRegData })


def adminAddNote(request):
    if request.method == 'POST':
        Registration.objects.filter(register_id=request.POST['register_id']).update(addmin_note=request.POST['addmin_note'])
        userRegData = Registration.objects.all()
            
        return render(request, 'candidateRegistrationApp/admin.html', {'userRegData': userRegData })



def search(request):

    if request.GET['search_input']:
       

        from django.contrib.postgres.search import SearchVector

        userRegData = Registration.objects.annotate(
            search=SearchVector('user_name', 'user_email', 'user_phone', 'user_bdate', 'user_interested_in', 'user_city', 'user_experience'),
        ).filter(search=request.GET['search_input'])
    
        return render(request, 'candidateRegistrationApp/admin.html', { 'userRegData': userRegData })   
