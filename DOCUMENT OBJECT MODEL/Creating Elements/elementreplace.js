let elem2 = document.createElement('li');
let lakhan = document.createTextNode('these is replaced by vcd');
elem2.appendChild(lakhan);
elem2.className = 'childul';
let newElem2 = document.querySelector('li#abcd');
// console.log(newElem2);
newElem2.replaceWith(elem2);

//now directly replacing child
let elem3 = document.createElement('li');
let texte = document.createTextNode('these is replaced by method2');
elem3.appendChild(texte);
let newElem3 = document.getElementById('lala');
newElem3.replaceChild(element,document.getElementById('kuchbhi'));