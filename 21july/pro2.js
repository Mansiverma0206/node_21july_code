function showValue(){
   console.log(this.roll,this.name,this.age)
}

var ob1 = {roll : 101, name : "mansi",age : 23}
var ob2 = {roll : 101,name : "monika",age : 25}
var ob3 = {roll : 101,name : "mohit",age : 29}
var ob4 = {roll : 101,name : "manas",age : 30}
// binding function => function object
 
showValue.call(ob1)