// форма с 3 input - полета, 
//за въвеждане на име, 
//парола и телефон и бутон за изпращане на формата. 
//Към всяко от полетата има p - елемент, 
//с текст указващ, какви данни трябва да
// се въведат в съответното поле.
//23.30
var wrap = document.getElementById('wrapper');
var form = document.createElement('form');
var arrType = ['text', 'text', 'text', 'submit'];
var arrPar = ['name', 'password', 'Tel. No', ''];
for(var i = 0; i < 4; i++){
	var par = document.createElement('p');
	par.innerHTML = arrPar[i];
	var input = document.createElement('input');
	input.type = arrType[i];
	form.appendChild(par);
	form.appendChild(input);
}
var docFrag = document.createDocumentFragment();
docFrag.appendChild(form);

wrap.appendChild(docFrag);