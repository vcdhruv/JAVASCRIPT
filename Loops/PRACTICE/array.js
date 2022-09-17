console.log('iterating array using for each and for');
let arr = [1,2,3,4,5,6,7,8,9,10,'hello',true];
arr.forEach(function(index , element , array){
    console.log(index , element , array);
});
console.clear();
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}