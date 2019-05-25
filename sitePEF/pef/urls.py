from django.conf.urls import url
from django.contrib import admin
from django.conf.urls import include
from pef import views


urlpatterns = [
	url(r'home', views.home, name="home"),
	url(r'pratique', views.pratique, name="pratique"),
	url(r'modeloInterativo', views.modeloInterativo, name="modeloInterativo"),
	url(r'lorem1', views.lorem1, name="lorem1"),
	url(r'^$', views.index, name="index"),
]

