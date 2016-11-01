var title = $('<p></p>').attr('id', 'title').appendTo('#img-container');
var newImg = $('<img id="new-img">').appendTo('#img-container');

$('#container img').hover(

	function(){
		var imgSrc = $(this).attr('src');
		title.text($(this).attr('alt'));
		newImg.attr('src', imgSrc).css('width', '600px');

		}

	);