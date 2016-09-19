var arr1 = [1, 2, 3]; 
var arr2 = ["one", "two", "three"]; 
var myArr = [].push.apply(arr1, arr2);

console.log(myArr);//number of elements
console.log(arr1);//!!!!!
