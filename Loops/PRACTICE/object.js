console.log('iterating objects using for-in loop and template literals');
let myObj = {
    name : 'vishmay',
    'father name' : 'chetanbhai',
    'last name' : 'dhruv',
    college : 'darshan',
    branch : 'computer',
    marks : 130,
    outOf : 150,
    isStudent : true
}
for (const key in myObj) {
        const element = myObj[key];
        console.log(`${key} : ${element}`);
}