//Primitive Data Types

//String
let name = "vcd";
console.log("My string is" + name);
console.log("Data type is"+(typeof name));

//Numbers
let marks = 34; 
console.log("Data type of "+marks+" is:"+(typeof marks));

//boolean
let isStudent = true;
console.log("Data type of "+isStudent+" is:"+(typeof isStudent));

//Null
let isNull = null;
console.log("Data type of "+isNull+" is:"+(typeof isNull));//data type: object

//Undefined
let undef = undefined;
let abcd;
console.log("Data type of "+undef+" is:"+(typeof undef));
console.log("Data type of "+abcd+" is:"+(typeof abcd));

//Referance Data types

//Arrays
let myArr = [1 , 2 , 3 , 4 , 5 , false , "hello my name is vishmay"];
console.log("Data type of "+myArr+" is:"+(typeof myArr));

//Object Literals
let avengersMarvel = {
    isSteveAvenger : true,
    shieldPower : 4587,
    friend : "tony stark",
}
console.log(typeof avengersMarvel);

//function 
function world() {
    
}
console.log( typeof world );

//date 
let date = new Date();
console.log(typeof date);