var form = document.forms[0];
//console.log(form);

var formSpans = form.getElementsByTagName('span');

console.log(formSpans);

for (var i = 0, len = formSpans.length; i < len; i++) {

	console.log(formSpans[i].id);

}

