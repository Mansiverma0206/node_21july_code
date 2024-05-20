var students = [
   {roll:101,name:"mansi",address:"mhow",age:23},
   {roll:102,name:"monika",address:"indore",age:25},
   {roll:103,name:"mohit",address:"dewas",age:27},
   {roll:104,name:"manas",address:"bhopal",age:30},
   {roll:105,name:"manveer",address:"ratlam",age:35},
]
var studs = []
console.log(students)
// var filterData = students.filter(studs=>studs.address=="indore");
// var filterData = students.filter(studs=>studs.age<=25 ||studs.address=='dewas');

var filterData = students.filter(studs=>studs.age>=30 && studs.address=='indore')
console.log(filterData)

// predicate =>true / false value
var students = [
   {roll:101,name:"mansi",address:"mhow",age:23},
   {roll:102,name:"monika",address:"indore",age:25},
   {roll:103,name:"mohit",address:"dewas",age:27},
   {roll:104,name:"manas",address:"bhopal",age:30},
   {roll:105,name:"manveer",address:"ratlam",age:35},
]

console.log(students)
// var filterData = students.filter(studs=>studs.address=="indore");
// var filterData = students.filter(studs=>studs.age<=25 ||studs.address=='dewas');

// var filterData = students.filter(studs=>studs.age>=30 && studs.address=='ratlam')

var filterData = students.filter(studs=>studs.age>=30 || studs.address=='dewas')
console.log(filterData)
// console.log(filterData)

// predicate =>true / false value