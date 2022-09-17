/*
element selector
1.single element selector
2.multi element selector
*/
//id can have only single element
//class can have multi elements

//1.single element selectors

let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
// element.style.color = 'red';  //can change css with javascript
// element.innerText = "I m vcd";
element.innerHTML = "<b>Vishmay</b>";
// console.log(element);

let s = document.querySelector('#myfirst'); //# for id and . for class
s = document.querySelector('.child'); //it will give first element of child class
s = document.querySelector('b'); // it will give element of b tag
s = document.querySelector('div'); //it will give first div which is of container in html file
s.style.color = 'green';
// console.log(s);

//2. multi element selector
let elem = document.getElementsByClassName('child');
elem = document.getElementsByClassName('container');
elem = document.getElementsByTagName('div');
console.log(elem);

//iterate html content
// Array.from(elem).forEach(element => {
//     console.log(element);
//     element.style.color = 'red';
// });

//now using traditional for loop
for (let i = 0; i < elem.length; i++) {
    const element = elem[i];
    element.style.color = 'blue';
}
// console.log(elem[0].getElementsByClassName('child')); //can access with elem[0] and elem[1]and simillarly
