console.log('helo');
let a = document;
//a = document.body;
a = document.all;
// a = document.forms;
// a = document.forms[0];
//Array.from(param) will create an array from param and then use it in for each loop
// Array.from(a).forEach(function(element) {
//     console.log(element);
// });
a = document.links[0].href;
console.log(a);