// Problem 2. People of age

//Write a function that checks if an 
//array of person contains 
//only people of age (with age 18 or greater)
//         Use only array methods and no regular loops (for, while)
var arr = [{name: 'name', age: 12}, {name: 'name', age: 28}];

var matrix = arr.map(function(line) {
return line.age;                   
});      

console.log(matrix);

function lessThan(number) {
return number<18;
}
console.log(matrix.some(lessThan));        