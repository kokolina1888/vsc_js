// //arr is in the global scope
// //it is accessible from anywhere
// var arr = [1, 2, 3, 4, 5, 6, 7];
// function countOccurences (value) {
// 	//count is declared inside the function 
// 	//so it is accessible only inside it
// 	var count = 0;
//   for (var i=0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       count++;
//     }
//   }
//   //return count;
// }

// console.log(countOccurences(4));
// console.log(i);
// console.log(count);

//vars are not declared in a function
var c = 10;
for (var x = 1; x < 5; x++) {
  var y = x * x;
  c = c * x;
  console.log(x + " " + y + ' c = '+ c);
//return y;
}

console.log("x=" + x + " y=" + y + ' c = '+ c); // x=5 y=16

// Now "x" and "y" are variables in the global scope
