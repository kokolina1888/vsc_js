var items 	= [ 2, 6, 3, 4, 6], res, res1, check;

res = items.indexOf(11);

console.log(res);

// res1 = items.lastIndexOf(6, 2);

// console.log(res1);


check = Array.isArray(res);
console.log(check);

check = Array.isArray(items);
console.log(check);

console.log(typeof(items));
