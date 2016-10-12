// // variant one
// window.onload = function(){
// 	var btn = document.getElementById('changer');
// 	btn.addEventListener('click', function(){
// 		var h = document.getElementById('mood');
// 			var pic = document.getElementById('pic');
// 			var text = h.innerHTML;
// 			if (text !== "I am serious") {
// 				h.innerHTML = "I am serious";
// 				pic.src = 'index_1.jpg';
// 			} else {				
// 				h.innerHTML = "Just kidding!";
// 				pic.src = 'index.jpg';
// 			}

// 	}, false);

// };

// variant two
window.onload = function(){
	var btn = document.getElementById('changer');
						//EVENT, HANDLER..., isCapturing
	btn.addEventListener('click', changeMood, false);

	function changeMood(ev){

		
		console.log(ev.target);
		// var h = document.getElementById('mood');
		// var pic = document.getElementById('pic');
		// var text = h.innerHTML;
		// if (text !== "I am serious") {
		// 	h.innerHTML = "I am serious";
		// 	pic.src = 'index_1.jpg';
		// } else {				
		// 	h.innerHTML = "Just kidding!";
		// 	pic.src = 'index.jpg';
		// }
	}
};