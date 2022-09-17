let marks = [100, 78, 89, 95, 96];
const fruits = ['oraange', 'apple', 'safarjan'];
const mixed = ['str', 34, [3, 5]];

//using constructor
const arr = new Array(14,78,98,'apple');
console.log(arr);
console.log(mixed);
console.log(fruits[1]);
console.log(arr.length);
console.log(Array.isArray(arr));
console.log(Array.isArray('dfdf'));
arr[0] = "vishmay"; //array value can be changed like this
console.log(arr);
let value = marks.indexOf(100);
console.log(value);

//mutating or modifying arrays
//by using these methods it will change original arrays so this needs to be keep in mind.
marks.push(97); //at last insert
marks.unshift(99);  //at first insert
marks.pop();    //delte from last
marks.shift();  //delete from first
marks.splice(1,2); //starting from index 1 removes 2 elements
marks.reverse();
let marks2 = [1,2,3];
marks = marks.concat(marks2);   //marks need to be let so go and change it to let from const
console.log(marks);
console.clear();

//object
let myObj = {
    name : "vishmay",
    hobby : "cricket",
    isHealthy : true,
    marks : [24,26,28,25,27],
    //to give space in name
    'last name' : "dhruv"
}
console.log(myObj);
console.log(myObj.marks);
console.log(myObj.isHealthy);
//we can alse access it like below
console.log(myObj['name']);
console.log(myObj['marks']);