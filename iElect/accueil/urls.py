from django.urls import path
from . import views
from .views import index

app_name = 'accueil'

urlpatterns = [
    path('', index, name='index'),
    path('billing/', views.billing, name='billing'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('profile/', views.profile, name='profile'),
    path('rtl/', views.rtl, name='rtl'),
    path('sign-in/', views.sign_in, name='sign_in'),
    path('sign-up/', views.sign_up, name='sign_up'),
    path('tables/', views.tables, name='tables'),
    path('virtual-reality/', views.virtual_reality, name='virtual_reality'),
]