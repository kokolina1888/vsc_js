// Write a function that groups 
//an array of persons by first letter 
//of first name and returns the groups 
//as a JavaScript Object

//     Use Array#reduce
//     Use only array methods and no regular loops (for, while)
var arr, res;
arr = [{name: 'aname12', age: 12, gender: true}, 
{name: 'bname11', age: 11, gender: true}, 
{name: 'cname', age: 58, gender: false},
{name: 'aname', age: 38, gender: true},
{name: 'bname', age: 48, gender: false},
{name: 'cname1', age: 18, gender: false}];

arr = arr.map(function(line){
	return line.name;
});

function transf(obj, el){
	var prop = el[0];
	if (!obj[prop]) {
		obj[prop] = [el];
	} else{
		obj[prop].push(el);
	}
	return obj;
}


console.log(arr.reduce(transf, {}));