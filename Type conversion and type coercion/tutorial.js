//type conversion
let myVar = 34;
console.log(myVar , typeof myVar);
myVar = String(34);
console.log(myVar , typeof myVar);

let booleanVar = true;
console.log(booleanVar , typeof booleanVar);
booleanVar = String(true);
console.log(booleanVar , typeof booleanVar);

let date = new Date();
console.log(date , typeof date);
date = String(new Date());
console.log(date , typeof date);

let arr = [1 , 2 , false , "vcd"];
console.log(arr , typeof arr);
console.log(arr.length , typeof arr);
arr = String([1 , 2 , false , "vcd"]);
console.log(arr , typeof arr);
console.log(arr.length , typeof arr);

let i = 75;
console.log(i.toString());

let stri = "3456";
console.log(stri , typeof stri);
stri = Number("3456");
console.log(stri , typeof stri);

stri = Number("345d6");
console.log(stri , typeof stri);
// NaN means not a Number.
stri = Number(true);
console.log(stri , typeof stri);
//as 1 is for true and 0 is for false.

stri = Number([1,2,3,4,5,6,7,8]);
console.log(stri , typeof stri);
//it will also give because it will not convert array to number

//parseInt

let n = parseInt("34.0987");
console.log(n , typeof n);
n = Number("34.0987");
console.log(n , typeof n);
n = parseFloat("34.0987");
console.log(n , typeof n);

//.tofixed is used to give decimal places after number
console.log(n.toFixed(30) , typeof n); 

//Type coercion
let myStr = "698";
let myNum = 34;
console.log(myStr + myNum);

myStr = Number("698");
console.log(myStr + myNum);