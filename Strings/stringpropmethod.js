const name = "vishmay";
const greeting = "Good Morning";
console.log(greeting +" "+ name);
//more better way is concat string function..
let gmete = 'vishmay dhruv';
gmete = gmete.concat(' ','is ','boy');
console.log(gmete);
console.log(gmete.length);
console.log(gmete.toLowerCase());
console.log(gmete.toUpperCase());
//it is not changing permanently
console.log(gmete);
console.log(gmete[0]);
console.log(gmete.indexOf('is'));
console.log(gmete.indexOf('dhruv'));
console.log(gmete.indexOf('xyz'));
console.log(gmete.lastIndexOf('s'));
console.log(gmete.charAt(3));
console.log(gmete.endsWith('boy'));
console.log(gmete.endsWith('yob'));
console.log(gmete.includes('is'));
console.log(gmete.includes('was'));
console.log(gmete.substring(0,7));
//it will last 4
console.log(gmete.slice(-4));
//it will give first 4
console.log(gmete.slice(0,4));
//* ***** very imp split method
console.log(gmete.split(' '));
console.log(gmete.split('v'));
//replace function will only replace the first occurrence and not all the occurrence
console.log(gmete.replace('is','was good')); //open console and see output it will be clear


//Template Literals

//it was introduced in ES6 and it is giving error
let fruit1 = 'apple';
let myName = 'vishmay';
let fruit2 = 'chiku'; 
let myHtml = `hello ${myName} //`````` backticks is used key that is above tab
                <h1> This is heading </h1> 
                <p> you like ${fruit1} and ${fruit2}`;
document.body.innerHTML = myHtml;