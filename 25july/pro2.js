// constructor model(function prototyping)=> data initalization

function Student(roll,name,age)
{
  this.roll = roll
  this.name = name
  this.age = age
}

var ob1 = new Student(101,"mansi",24);
console.log(ob1)
var ob2 = new Student(109,"mohit",29)
console.log(ob2)