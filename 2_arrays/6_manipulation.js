var arr = [ 1, 2, 3, 4, 100 ], 
	reversed, str, arr2, myArr,
	arr3;

arr2 = [ 12, 78, 73, 46, 3, 53, 76, 18, 31, 2 ];
arr3 = [ 20, 37, 14, 14, 29, 25, 4, 37, 57, 78 ];

console.log(arr);
reversed = arr.reverse();

console.log(reversed);

str = arr.join();

console.log(str);

str = arr.join('');

console.log(str);

myArr = arr.concat(arr2, arr3);
console.log(myArr);
