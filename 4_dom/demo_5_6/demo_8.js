var inputs = document.getElementsByTagName('input');
var email = document.getElementsByName('email_address2');
//var classGroup = document.getElementsByClassName('className');
var formInputs = document.querySelectorAll('#email_form input');//всички срещнати
//var form = document.querySelectorAll('#email_form input').name;//всички срещнати

console.log(inputs[0].name);
console.log(email[0].type);
console.log(formInputs[0].value);