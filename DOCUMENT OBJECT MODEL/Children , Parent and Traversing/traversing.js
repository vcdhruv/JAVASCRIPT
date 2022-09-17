let cont = document.querySelector('.container');
// cont = document.querySelector('')
console.log(cont.childNodes); // will show text , comments and all
console.log(cont.children); //it will show imp portion of browser . it is mostly used
let nodeName = cont.childNodes[0].nodeName;
// container -> childNodes -> 1 -> name ->which is #text
console.log(nodeName);

//Node types:
// 1. element
// 2. attribute
// 3. text node
// 8. comment
// 10. doc type
//it will output from above 5 cases only based on type if text then 3
//below in 7th line in html code there is comment so in output it will give 8 
let nodeType = cont.childNodes[7].nodeType;
console.log(nodeType);

let container = document.querySelector('div.container');
console.log(container);
console.log(container.children);
console.log(container.children[1].children[0].children);
//container->children[1](of myfirst)->children[0](list)->children;
//firstChild gives first child
console.log(container.firstChild);
//firstElementCHild given first element child
console.log(container.firstElementChild);
//lastElementChild gives last element child
console.log(container.lastElementChild);
//childElementCount will count child element from childNodes
console.log(container.childElementCount);

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);//sibling means next to element
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);