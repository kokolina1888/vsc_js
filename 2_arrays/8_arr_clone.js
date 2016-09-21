var items = [1, 2, 3, 4, 5], 
	myVar, part,
	clonedArr; 
part = items.slice(1, 3); 
console.log(part);

//WHY TO CLONE THE ARRAY

myVar = items;
console.log(myVar);

myVar[5] = 55;
myVar[6] = 55;

console.log(myVar);

// PAY ATTENTION
// changes are passed by refference
console.log(items);

clonedArr = items.slice(0);
console.log(clonedArr);

clonedArr[5] = 55;
console.log(clonedArr);

console.log(items);



