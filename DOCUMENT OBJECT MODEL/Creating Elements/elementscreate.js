//create
let element = document.createElement('li');
// console.log(element);
//add a classname to li element
element.className = 'childul';
// console.log(element);
element.id = 'createLi';
// console.log(element);
element.setAttribute('title','mytitle');
// element.innerHTML = '<b>hello this is created by vcd</b>';
let text = document.createTextNode('i am a text node')
element.appendChild(text);
console.log(element);
let ul =document.querySelector('ul.childlist');
ul.appendChild(element);
console.clear();

//created by me
let elem = document.createElement('h1');
let t = document.createTextNode('Heading');
elem.appendChild(t);
elem.id = 'heading';
let newElem = document.querySelector('div#heading');
newElem.appendChild(elem);