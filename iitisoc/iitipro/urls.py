from atexit import register
from unicodedata import name
from django.urls import path
from . import views

urlpatterns = [
path('' , views.index , name = 'index'),
path('register', views.register ,name='register'),
path('login',views.login , name='login'),
path('logout',views.logout , name='logout'),
path('contactus' , views.contactus , name='contactus'),
path('about',views.about , name='about')
]