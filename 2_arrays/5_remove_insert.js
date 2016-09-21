var arr = [1, 2, 3, 4], myVar, len;

arr.push(100);

console.log(arr);

arr.pop();

console.log(arr);

myVar = arr.pop();

console.log(myVar);
console.log(arr);

len = arr.length;
console.log(len);

delete arr[3];

console.log(arr);
len = arr.length;
console.log(len);

//FILTER THE UNDEFINED ELEMENTS

arr = arr.filter(function(num){
	return num!==undefined;
});

console.log(arr);

//deletes all elements of the array
arr.length = 0;
console.log(arr);
