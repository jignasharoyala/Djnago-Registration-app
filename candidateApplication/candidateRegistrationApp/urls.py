from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('adminView/', views.adminView, name='adminView'),
    path('adminView/adminAddNote/', views.adminAddNote, name='adminAddNote'),
    path('search/', views.search, name='search'),

]
