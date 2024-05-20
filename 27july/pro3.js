class ABC
{
   fun1(){
      console.log("ABC fun1.......")
   }
   fun3(){
      console.log("ABC fun3.......")
   }
   fun4(){
      console.log("ABC fun4.......")
   }
}

class XYZ extends ABC
{
   fun2()
   {
      console.log("XYZ fun2.....")
   }

   fun4(){
      super.fun4()
      console.log("XYZ fun4.......")
   }
}

var ob1 = new XYZ()
ob1.fun1()  // inherited method
ob1.fun3() //overridded method
ob1.fun4()
ob1.fun2()  //self method