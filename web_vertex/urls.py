from django.urls import path
from web_app import views
from django.views.generic import TemplateView
from django.views.static import serve
from django.conf import settings
from django.urls import re_path
from django.conf.urls.static import static





urlpatterns = [
    path('',views.login,name='login'),
    path('login/', views.login, name='login'),
    path('home/',views.web_vertexapp,name='home'),
    path('',views.voltando,name='voltar'),
    path('acessos/',views.acessos,name = 'acessos'),
    path('material/',views.material,name = 'material'),
    path('comissionamento/',views.comissionamento,name = 'comissionamento'),
    path('treinamento/',views.treinamento,name = 'treinamento')
    ] 