function fun1(){console.log("Hello EveryOne")}
function fun2(){console.log("Good Evening....")}

var num = [1,22,33,44,22]

// atleast one time
// module.exports = fun1

module.exports = {
   fun1 : fun1,
   fun2 : fun2,
   data : num
}