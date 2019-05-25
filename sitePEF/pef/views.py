from django.shortcuts import render
from django.http import HttpResponse


def index(request):
	return render(request, 'pef/home.html', context=context_dict)


def lorem1(request):
	return render(request, 'pef/lorem1.html')


def pratique(request):
	return render(request, 'pef/pratique.html')


def modeloInterativo(request):
	return render(request, 'pef/modeloInterativo.html')

def home(request):
	return render(request, 'pef/home.html')