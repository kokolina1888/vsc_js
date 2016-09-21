var arr = [1, [2, 3], [4], [5, 6], 7];
function flatten(arr, item) {
  if (Array.isArray(item)) { return arr.concat(item); }
  return arr.concat([item]);
}
console.log(arr.reduce(flatten, [])); //[ 1, 2, 3, 4, 5, 6, 7 ]
