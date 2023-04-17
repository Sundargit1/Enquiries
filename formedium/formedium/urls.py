"""formedium URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from myapp import views

urlpatterns = [
    
    path('',views.index, name='index'),
    path('user',views.user, name='user'),
    path('student',views.student, name='student'),
    path('course',views.course, name='course'),
    path('form',views.form, name='form'),
    path('attendance',views.attendance, name='attendance'),
    path('signin',views.signin, name='signin'),
    path('signup',views.signup, name='signup'), 
    path('cash',views.cash, name='cash'),
    path('newuser',views.newuser, name='newuser'),
    path('newcourse',views.newcourse, name='newcourse'),
    path('addfees',views.addfees, name='addfees'),
    path('addattendance',views.addattendance, name='addattendance'),
    path('addstudent',views.addstudent, name='addstudent'),
    path('addform',views.addform, name='addform'),
    

    
    path('create/',views.create, name='create'),
    path('edit/<id>',views.edit, name='edit'),
    path('edit/update/<id>',views.update, name='update'),
    path('delete/<id>',views.delete, name='delete'),
    

    
    path('create1/',views.create1, name='create1'),
    path('edit1/<id>',views.edit1, name='edit1'),
    path('edit1/update1/<id>',views.update1, name='update1'),
    path('delete1/<id>',views.delete1, name='delete1'),
    

    path('create2/',views.create2, name='create2'),
    path('edit2/<id>',views.edit2, name='edit2'),
    path('edit2/update2/<id>',views.update2, name='update2'),
    path('delete2/<id>',views.delete2, name='delete2'),

    path('create3/',views.create3, name='create3'),
    path('edit3/<id>',views.edit3, name='edit3'),
    path('edit3/update3/<id>',views.update3, name='update3'),
    path('delete3/<id>',views.delete3, name='delete3'),

    path('create4/',views.create4, name='create4'),
    path('edit4/<id>',views.edit4, name='edit4'),
    path('edit4/update4/<id>',views.update4, name='update4'),
    path('delete4/<id>',views.delete4, name='delete4'),
    path('pay/<id>',views.pay, name='pay'),
    path('pay/payment/<id>',views.payment, name='payment'),

    path('create5/',views.create5, name='create5'),
    path('edit5/<id>',views.edit5, name='edit5'),
    path('edit5/update5/<id>',views.update5, name='update5'),
    path('delete5/<id>',views.delete5, name='delete5'),

]
