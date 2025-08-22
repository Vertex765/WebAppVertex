from django.shortcuts import render



# Create your views here.

def login (request):
    return render(request,'login.html')

def web_vertexapp (request):
    return render(request, 'home.html')

def voltando (request):
    return render(request, 'login.html')
def acessos (request):
    return render(request, 'acessos.html')
def material (request):
    return render(request, 'material.html')

def comissionamento (request):
     return render(request,'comissionamento.html')

def treinamento (request):
     return render(request,'treinamento.html')
# views.py



