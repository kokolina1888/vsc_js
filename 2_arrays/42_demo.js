var arr1 = [1, 2, 3], 
arr2 = ["one", "two", "three"]; 

[].push.apply(arr1, arr2); 

console.log(arr1);