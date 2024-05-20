// constructor model(function prototyping)
function Student(roll,name,age)
{
  this.roll = roll
  this.name = name
  this.age = age

  this.show = function(){
   console.log(this.roll,this.name,this.age)
  }
}

function CsStudent(roll,name,age,subjects)
{
  Student.call(this,roll,name,age)
  this.subjects = subjects
  this.showCs = function(){
    console.log(this.subjects)
  }
}
CsStudent.prototype = new Student();
var ob1 = new CsStudent(101,"mansi",24,"JAVA,CSS")

// var ob1 = new Student(101,"mansi",24);
ob1.show()
ob1.showCs()