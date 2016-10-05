// Методите getElementsBy - връщат LiveNodeList
// Методите querySelectorAll - връщат StaticNodeList
var form = document.forms[0];

var inputsGet = form.getElementsByTagName('input');
var inputsQuery = form.querySelectorAll('#email_form input');

console.log(inputsGet);
console.log(inputsQuery);


//create new input in the form
var inputNew = document.createElement("input");
inputNew.type = 'text';
inputNew.name = 'new_node';
form.appendChild(inputNew);

console.log(inputsGet);




