from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render



def index(request):
    return render(request, 'accueil/index.html')

def billing(request):
    return render(request, 'pages/billing.html')

def dashboard(request):
    return render(request, 'pages/dashboard.html')

def profile(request):
    return render(request, 'pages/profile.html')

def rtl(request):
    return render(request, 'pages/rtl.html')

def sign_in(request):
    return render(request, 'pages/sign-in.html')

def sign_up(request):
    return render(request, 'pages/sign-up.html')

def tables(request):
    return render(request, 'pages/tables.html')

def virtual_reality(request):
    return render(request, 'pages/virtual-reality.html')
