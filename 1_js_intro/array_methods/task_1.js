// <!-- Problem 1. Make person

//     Write a function for creating persons.
//         Each person must have firstname, lastname, age and gender (true is female, false is male)
//     Generate an array with ten person with different names, ages and genders
//  -->
var arr = [], r, gender = false,fName=[], lname=[];

fName = ['a', 'v', 'a', 'v', 'a', 'v', 'a', 'v', 'a', 'v'];
lName = ['a', 'v', 'a', 'v', 'a', 'v', 'a', 'v', 'a', 'v'];

function makePerson(){
	var person = {};
	r = Math.random(0, 1)*10;
	r = parseInt(r);
	
	currentFirstName = person.firstname = fName[r];
	currentLastName = person.lastname = lName[r];
	if (currentFirstName === 'a') {
		person.gender = true;
	}
	
	person.age = parseInt(Math.random()*100);
	
	return person;
}

for (var i = 0; i < 10; i+=1) {
	arr[i] = makePerson();
}
console.log(arr);
