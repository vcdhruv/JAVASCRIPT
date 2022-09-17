function greet(name , age) {
    console.log(`happy birthday ${name} of ${age}`);
}
let name = "vcd";
greet(name , 18);
let n = greet(name , 18);
console.log(n);
//return statement example
function hello(name , age) {
    console.log(`happy birthday ${name} of ${age}`);
    return 4;
}
let val = hello(name , 18);
console.log(val);

//if you want to pass parameter or not example
//at time of call without passing parameter it will not give undefined by using these syntax
function hello(name , age=18) {
    console.log(`happy birthday ${name} of ${age}`);
    let msg = "it is returned";
    return msg;
}
console.log(hello(name));

//we can pass function in variable
const myName = function (nameV , rollNo) {
    console.log(`${nameV} , ${rollNo}`);
}
console.log(myName('vishmay',314));

const obj = {
    name : function (roll) {
        return `${roll}`;
    }
}
console.log(obj.name('programmer'));
console.clear();
//scope
//let/const has block level scope
//var has function level scope

var k = 1;
console.log(k);
if(1)
{
    console.log(k); 
    var k = 9;
    console.log(k);
    k = 23;
    console.log(k);
}
console.log("final value of k:"+ k);
var i = 5;
function fnje() {
    var i = 2;
    // i = 9; it will change the value of i in line number 57 and 59.
    console.log('inside function i value:',i);
}
console.log("outside function i value:"+i);
fnje();
//let : block level scope , const: also has block level scope
let j = 1;
if(1)
{
    let j = 5;
    console.log("value of j inside block:"+j);
}
console.log("value of j outside block:"+j);