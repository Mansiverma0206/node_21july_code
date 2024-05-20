class Student {
   constructor(roll,name,branch,city="Ratlam") {
      this.roll = roll;
      this.name = name;
      this.branch = branch;
      this.city = city;
   }
   show()
   {
      console.log(this.roll,this.name,this.branch,this.city)
   }
}

var ob1 = new Student(101,"mansi","cs","mhow");
ob1.show()
var ob2 = new Student(102,"mohit","Ft","indore");
ob2.show()



