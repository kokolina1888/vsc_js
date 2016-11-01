$( "#btn" ).click(function(ev) {
	ev.preventDefault();

	if ($('#name').val() === '') {	
	var p = $('<p>* Enter your name</p>');
	p.css('color', 'red');
	p.insertBefore('#name');
}

if ($('#pd').val() === '' || $('#pd').val().length < 6) {
	console.log($('#pd').val().length);
	var pd = $('<p>* Must be not be empty or less than 6 chars</p>');
	pd.insertBefore('#pd');
	pd.css('color', 'red');
}
});

