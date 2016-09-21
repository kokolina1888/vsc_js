// Write a function that calculates the average 
//age of all females, extracted from an array of persons
//     Use Array#filter
//     Use only array methods and no regular loops (for, while)

var arr, myArr,
len, sum, avAge;

arr = [{name: 'name12', age: 12, gender: true}, 
	{name: 'name11', age: 11, gender: true}, 
	{name: 'name', age: 28, gender: false},
	{name: 'name', age: 38, gender: true}];


	myArr = arr.filter(function(line){
		if (line.gender === true) {
			return line;
		}
	});
//console.log(myArr);

len = myArr.length;
console.log(len);

avAge = (myArr.reduce(function(sum, line) {
  return sum + line.age;
}, 0))/len;

console.log(avAge);
