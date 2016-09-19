// Problem 3. Underage people

//Write a function that prints all 
//underaged persons of an array of person
//         Use Array#filter and Array#forEach
//         Use only array methods and no regular 
//loops (for, while)

var arr = [{name: 'name12', age: 12}, {name: 'name11', age: 11}, {name: 'name', age: 28}];

var newArr = arr.filter(function(line){
if (line.age < 18) {
	return line;
}
});
function logArrayElements(line){
console.log('name = ' + line.name);
}
newArr.forEach(logArrayElements);