var arr = [], len, i;

arr = [ 35, 31, 62, 84, 50, 11, 93, 60, 81, 11 ];

delete arr[1];
console.log(arr);

len = arr.length - 1;
console.log(len);

for (i = len; i >= 0; i--) {
	console.log(arr[i]);
}

arr[28] = 'me';
arr[44] = 'you';

len = arr.length - 1;

//PRINTS ALL ELEMENTS, INCLUDING UNDEFINED
for (i = len; i >= 0; i--) {
	console.log(arr[i]);
}


//PRINTS ALL ELEMENTS EXCEPT UNDEFINED
for(i in arr){
	
	console.log(arr[i]);
}

//PRINTS ALL ELEMENTS EXCEPT UNDEFINED and odd numbers
//!!!!  if the element is even
// (i % 2) is 0, which evaluates to false, 
//so the element is printed
//if the element is odd (i % 2) is 1 or true, so 
//the number is not printed
for(i in arr){
	if (i % 2) {
		continue;
	}
	console.log(arr[i]);
}