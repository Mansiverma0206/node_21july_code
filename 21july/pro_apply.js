function showValue(a,b){
   console.log(this.roll,this.name,this.age)
   console.log(a,b)
}

var ob1 = {roll : 101, name : "mansi",age : 23}
var ob2 = {roll : 101,name : "monika",age : 25}
var ob3 = {roll : 101,name : "mohit",age : 29}
var ob4 = {roll : 101,name : "manas",age : 30}
// binding function => function object
 
showValue.apply(ob1,[45,34])