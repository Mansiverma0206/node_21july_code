
// function test()
// {
//    var num =100 ;
//    function hello()
//    {
//       var z=5*num ;
//       console.log(z)
//       function fun()
//       {
//          var y = num+10+z
//          console.log(y)
//       }
//       return fun
//     }
//    return hello
// }

// var fun1 = test()
// var fun2= fun1()
// fun2()

// let numbers = [1, 2, 3, 4, 5,6,7];

// let result = numbers.find(function(number) {
//     return number <= 6;
// });

// console.log(result); // Output: 4

let numbers = [1, 2, 3, 4, 5];
numbers.fill(5, 0,3 );

console.log(numbers); // Output: [1, 0, 0, 4, 5]

