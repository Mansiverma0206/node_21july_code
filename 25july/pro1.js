// javascript is not object oriented
// factory model

function createStudent(roll,name,age)
{
   var ob ={
      roll : roll,
      name :  name,
      age : age 
   }
   return ob;
}

var ob1 = createStudent(101,"mansi",23);
var ob2 = createStudent(102,"mohit",29);
console.log(ob1)
console.log(ob2)