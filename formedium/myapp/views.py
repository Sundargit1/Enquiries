from django.shortcuts import render, redirect
from myapp.models import Member
from myapp.models import Primary
from myapp.models import Secondary
from myapp.models import Test
from myapp.models import Work
from myapp.models import Penta
# Create your views here.
def index(request):
    return render(request,"dashboard.html")
def user(request):
    return render(request,"tables.html")
def student(request):
    return render(request,"billing.html")
def course(request):
    return render(request,"virtual-reality.html")
def form(request):
    return render(request,"rtl.html")
def attendance(request):
    return render(request,"profile.html")
def signin(request):
    return render(request,"sign-in.html")
def signup(request):
    return render(request,"sign-up.html")
def cash(request):
    return render(request,"fees.html")
def newuser(request):
    return render(request,"adduser.html") 
def newcourse(request):
    return render(request,"addcourse.html")
def addfees(request):
    return render(request,"addfees.html")
def addattendance(request):
    return render(request,"addattendance.html")
def addstudent(request):
    return render(request,"studentdetails.html") 
def addform(request):
    return render(request,"enquries-form.html")  
    

  
def create(request):
    member = Member(userid=request.POST['userid'], name=request.POST['name'],gender=request.POST['gender'],email=request.POST['email'],role=request.POST['role'],)
    member.save()
    return redirect('/')
  
def user(request):
    members = Member.objects.all()
    context = {'members': members}
    return render(request, 'result.html', context)

  
def edit(request, id):
    members = Member.objects.get(id=id)
    context = {'member': members}
    return render(request, 'edit.html', context)

  
  
def update(request, id):
    member = Member.objects.get(id=id)
    member.userid= request.POST['userid']
    member.name = request.POST['name']
    member.gender = request.POST['gender']
    member.email = request.POST['email']
    member.role = request.POST['role']
    member.save()
    return redirect('/')
  
  
def delete(request, id):
    member = Member.objects.get(id=id)
    member.delete()
    return redirect('/')



def create1(request):
    member = Primary(sno=request.POST['sno'], date=request.POST['date'],fname=request.POST['fname'],school=request.POST['school'],phonenumber=request.POST['phonenumber'],response=request.POST['response'],)
    member.save()
    return redirect('/')
  
def student(request):
    members = Primary.objects.all()
    context = {'members': members}
    return render(request, 'result1.html', context)
  
def edit1(request, id):
    members = Primary.objects.get(id=id)
    context = {'member': members}
    return render(request, 'edit1.html', context)
  
  
def update1(request, id):
    member = Primary.objects.get(id=id)
    member.sno= request.POST['sno']
    member.date = request.POST['date']
    member.fname = request.POST['fname']
    member.school = request.POST['school']
    member.phonenumber = request.POST['phonenumber']
    member.response = request.POST['response']
    
    member.save()
    return redirect('/')
  
  
def delete1(request, id):
    member = Primary.objects.get(id=id)
    member.delete()
    return redirect('/')



def create2(request):
    member = Secondary(courseid=request.POST['courseid'], coursename=request.POST['coursename'],duration=request.POST['duration'],startdate=request.POST['startdate'],enddate=request.POST['enddate'],courseamount=request.POST['courseamount'],discount=request.POST['discount'])
    member.save()
    return redirect('/')
  
def course(request):
    members = Secondary.objects.all()
    context = {'members': members}
    return render(request, 'result2.html', context)
  
def edit2(request, id):
    members = Secondary.objects.get(id=id)
    context = {'member': members}
    return render(request, 'edit2.html', context)
  
  
def update2(request, id):
    member = Secondary.objects.get(id=id)
    member.courseid= request.POST['courseid']
    member.coursename = request.POST['coursename']
    member.duration = request.POST['duration']
    member.startdate = request.POST['startdate']
    member.enddate = request.POST['enddate']
    member.courseamount = request.POST['courseamount']
    member.discount = request.POST['discount']
    member.save()
    return redirect('/')
  
  
def delete2(request, id):
    member = Secondary.objects.get(id=id)
    member.delete()
    return redirect('/')



def create3(request):
    member = Test(sid=request.POST['sid'], name=request.POST['name'],date=request.POST['date'],course=request.POST['course'],time=request.POST['time'],attendance=request.POST['attendance'],)
    member.save()
    return redirect('/')
  
def attendance(request):
    members = Test.objects.all()
    context = {'members': members}
    return render(request, 'result3.html', context)
  
def edit3(request, id):
    members = Test.objects.get(id=id)
    context = {'member': members}
    return render(request, 'edit3.html', context)
  
  
def update3(request, id):
    member = Test.objects.get(id=id)
    member.sid= request.POST['sid']
    member.name = request.POST['name']
    member.date = request.POST['date']
    member.course = request.POST['course']
    member.time = request.POST['time']
    member.attendance = request.POST['attendance']
    
    member.save()
    return redirect('/')
  
  
def delete3(request, id):
    member = Test.objects.get(id=id)
    member.delete()
    return redirect('/')

def create4(request):
    member = Work(sno=request.POST['sno'], name=request.POST['name'],course=request.POST['course'],feesamount=request.POST['feesamount'],feespaid=request.POST['feespaid'],feesdue=request.POST['feesdue'],paymentdate=request.POST['paymentdate'],)
    member.save()
    return redirect('/')
  
def cash(request):
    members = Work.objects.all()
    context = {'members': members}
    return render(request, 'result4.html', context)
  
def edit4(request, id):
    members = Work.objects.get(id=id)
    context = {'member': members}
    return render(request, 'edit4.html', context)

def pay(request, id):
    members = Work.objects.get(id=id)
    context = {'member': members}
    return render(request, 'pay.html', context)

def payment(request, id):
    member = Work.objects.get(id=id)
    
    member.feesamount = request.POST['feesamount']
    member.feespaid = request.POST['feespaid']
    member.feesdue = request.POST['feesdue']
    
    member.save()
    return redirect('/')
  
def update4(request, id):
    member = Work.objects.get(id=id)
    member.sno= request.POST['sno']
    member.name = request.POST['name']
    member.course = request.POST['course']
    member.feesamount = request.POST['feesamount']
    member.feespaid = request.POST['feespaid']
    member.feesdue = request.POST['feesdue']
    member.paymentdate = request.POST['paymentdate']
    member.save()
    return redirect('/')
  
  
def delete4(request, id):
    member = Work.objects.get(id=id)
    member.delete()
    return redirect('/')


def create5(request):
    member = Penta(name=request.POST['name'],course=request.POST['course'],gender=request.POST['gender'],phonenumber=request.POST['phonenumber'],joindate=request.POST['joindate'],response=request.POST['response'],confirmation=request.POST['confirmation'],)
    member.save()
    return redirect('/')
  
def form(request):
    members = Penta.objects.all()
    context = {'members': members}
    return render(request, 'result5.html', context)
  
def edit5(request, id):
    members = Penta.objects.get(id=id)
    context = {'member': members}
    return render(request, 'edit5.html', context)
  
  
def update5(request, id):
    member = Penta.objects.get(id=id)
    member.name= request.POST['name']
    member.course = request.POST['course']
    member.gender = request.POST['gender']
    member.phonenumber = request.POST['phonenumber']
    member.joindate = request.POST['joindate']
    member.response = request.POST['response']
    member.confirmation = request.POST['confirmation']
    member.save()
    return redirect('/')
  
  
def delete5(request, id):
    member = Penta.objects.get(id=id)
    member.delete()
    return redirect('/')