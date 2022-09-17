//all other loops are same as java.
//for each loop : for printing elements in an array.
let arr = [1,2,3,4,5,6,7];
arr.forEach(function(element , index , array) {
   console.log(element , index , array); 
});
console.log("------------------------------------------------");
//otherwise
const array = [47,58,69,14,25];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}
//loop to iterate objects : for-in loop
let obj = {
    name : "vishmay",
    'father name' : "chetaanbhai",
    marks : 130,
    outOf : 150
}
for (let key in obj) {
    console.log(obj[key]);
}
for (const key in obj) {
    console.log(`${key} of object is ${obj[key]}`);
}