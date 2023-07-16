// Javascript arrow functions 
// Before : 
// let x = function(x,y) {
//     return x * y;
// }
// After : 
let x = (x,y) => x * y;
// test 
console.log(x(5,6));
// ---------------------------------------------
// Default Parameter Values
// you can pass default values in the function parameters 
function sum(x, y =10) {
    console.log(x+y);
}
sum(5);
sum(5,15);
// ---------------------------------------------------
// Javascript rest Parameter and spread Operator
// You can use the rest parameter to represebt an indefinite number of arguments as an array

function show(a,b,...args){
    console.log(a);
    console.log(b);
    console.log(args);
}
show(1,2,3,4,5,6)
// Output:
// 1
// 2
// [3, 4, 5, 6]
//-----------------------------------------------
