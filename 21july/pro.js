function showValue(){
   console.log(this.roll,this.name,this.age)
}

var ob1 = {
   roll : 101,
   name : "mansi",
   age : 23,
   show : showValue 
}
var ob2 = {
   roll : 101,
   name : "monika",
   age : 25,
   show : showValue 
}
var ob3 = {
   roll : 101,
   name : "mohit",
   age : 29,
  show : showValue 
}

var ob4 = {
   roll : 101,
   name : "manas",
   age : 30,
  show : showValue 
}

ob1.show()
ob2.show()
ob3.show()
ob4.show()