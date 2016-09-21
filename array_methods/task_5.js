// Write a function that finds the youngest 
//male person in a given array of people 
//and prints his full name
//     Use only array methods and no regular loops (for, while)
//     Use Array#find
var arr, myArr, min, num, res, sorted;

arr = [{name: 'name12', age: 12, gender: true}, 
	{name: 'name11', age: 11, gender: true}, 
	{name: 'name', age: 58, gender: false},
	{name: 'name', age: 38, gender: true},
	{name: 'name', age: 48, gender: false},
	{name: 'name1', age: 18, gender: false}];

myArr = arr.filter(function(line){
	if (line.gender === false) {
		return line;
}
});

sorted = myArr.sort(function(p1, p2){
return p1.age > p2.age;
});

console.log(sorted);

console.log(sorted[0].name);

     
