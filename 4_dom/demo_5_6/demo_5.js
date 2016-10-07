// 
// console.log(document.forms[0].innerHTML);

// console.log(document.getElementsByTagName('h1')[0].innerHTML);
var inputs = document.querySelectorAll('#email_form input');

var len = inputs.length;

for(var i = 0; i<len; i++){
	console.log(inputs[i].name);
}