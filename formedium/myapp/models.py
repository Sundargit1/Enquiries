# Create your models here.
from django.db import models
class Member(models.Model):
    userid = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    gender = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    role = models.CharField(max_length=50)
    
    
    class Meta:  
        db_table = "users"

class Primary(models.Model):
    sno = models.CharField(max_length=50)
    date = models.CharField(max_length=50)
    fname = models.CharField(max_length=50)
    school = models.CharField(max_length=50)
    phonenumber = models.CharField(max_length=50)
    response = models.CharField(max_length=50)
    
    
    class Meta:  
        db_table = "studentinfo"

class Secondary(models.Model):
    courseid = models.CharField(max_length=50)
    coursename = models.CharField(max_length=50)
    duration = models.CharField(max_length=50)
    startdate = models.CharField(max_length=50)
    enddate = models.CharField(max_length=50)
    courseamount = models.CharField(max_length=50)
    discount = models.CharField(max_length=50)
    
    
    class Meta:  
        db_table = "courses"


class Test(models.Model):
    sid = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    date = models.CharField(max_length=50)
    course = models.CharField(max_length=50)
    time = models.CharField(max_length=50)
    attendance = models.CharField(max_length=50)
    
    
    class Meta:  
        db_table = "attendance"

class Work(models.Model):
    sno = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    course = models.CharField(max_length=50)
    feesamount = models.CharField(max_length=50)
    feespaid = models.CharField(max_length=50)
    feesdue = models.CharField(max_length=50)
    paymentdate = models.CharField(max_length=50)
    
    class Meta:  
        db_table = "feesinfo"


class Penta(models.Model):
    
    name = models.CharField(max_length=50)
    course = models.CharField(max_length=50)
    gender = models.CharField(max_length=50)
    phonenumber = models.CharField(max_length=50)
    joindate = models.CharField(max_length=50)
    response = models.CharField(max_length=50)
    confirmation = models.CharField(max_length=50)
    
    class Meta:  
        db_table = "enquriesform"