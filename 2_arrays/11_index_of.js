var items 	= [ 2, 6, 3, 4, 6], res, res1, check;

res = items.indexOf(2);

console.log(res);

res1 = items.lastIndexOf(6, 2);

console.log(res1);


check = Array.isArray(res1);
console.log(check);

check = Array.isArray(items);
console.log(check);

