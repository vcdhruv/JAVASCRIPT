const age = 65;
if(age == 19)
{
    console.log("age is 19");
}
else if(age == 65)
{
    console.log("age is 65");
}
else
{
    console.log("age is not 19");
}
// == only compares value
// === compares data type and value
//!= is not equal to
//!== is for comparing value and data type i.e value and data type does not match
const marks = '45';
if(marks == 45)
{
    console.log("marks is 45 this is wrong see code correctly");
}
else
{
    console.log("marks is not 45");
}
if(marks == 45)
{
    console.log("marks is 45 with data type correctly");
}
else if(marks === 45)
{
    console.log("marks is 45 with data type correctly");
}
else
{
    console.log("marks is not 45 with no data type correctly");
}

//!== example
const n = '45'; // check for n = 45 also
if(n == 19)
{
    console.log("n is not 19");
}
else if(n !== 45)
{
    console.log("n is not perfect 45");
}
else
{
    console.log("kuch bhi");
}

//code to check if any variable is defined or not defined 
if(typeof variable !== 'undefined')
{
    console.log("variable is defined");
}
else
{
    console.log("variable is not defined");
}

//for boolean
const isDriver = true;  //check for false also
if(isDriver)
{
    console.log("yes i m driver");
}
else
{
    console.log("no i m not a driver");
}