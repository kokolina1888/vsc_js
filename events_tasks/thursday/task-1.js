function solve(param1, param2){
	var imgContainer, img, 
	filter, filterLabel,
	title, alt,
	dFrag, bigImg, bigImgTitle;
	var contаiner = document.getElementById(param1);

	//CREATING DOCUMENT FRAGMENT
	dFrag = document.createDocumentFragment();

	 //CREATE CONTAINER FOR ALL PICTURES ON THE RIGHT
	 var rightContainer = document.createElement('div');
	 rightContainer.id = 'right-container';

	 //CREATE FILTER

	 filter = document.createElement('input');
	 filter.type = 'text';
	 filter.id = 'filter';

	 filterLabel = document.createElement('label');
	 filterLabel.innerHTML = 'filter';
	 filterLabel.for = 'filter';

	

	 //APPENDING THE FILTER

	 rightContainer.appendChild(filterLabel);
	 rightContainer.appendChild(filter);



 	//CREATING IMG ELEMENTS AND APPENDING THEM TO MAIN CONTAINER
 	//EACH ELEMENT AND ITS TITLE IS IN SINGLE CONTAINER

 	
 	for (var i = 1; i <= param2; i++){
 		imgContainer = document.createElement('div');
 		imgContainer.className = 'img-container';
 		imgContainer.id = 'img-' + i;

 		//CURRENT ALT TEXT
 		alt = 'image ' + i;

		//CREATING IMAGE ELEMENT
		img = document.createElement('img');
		img.src = 'images/images_'+i+'.jpg';
		img.alt = 'image ' + i;

 		//CREATING TITLE OF IMAGE
 		title = document.createElement('p');
 		title.innerHTML = 'image ' + i;

 		imgContainer.appendChild(title);
 		imgContainer.appendChild(img);
 		
 		rightContainer.appendChild(imgContainer);
 	}

 	
 	
 	dFrag.appendChild(rightContainer);

 	
 	
 	//CREATE CONTAINER FOR ONE BIG PICTURE ON THE LEFT
 	var leftContainer = document.createElement('div');
 	leftContainer.id = 'left-container';

 	bigImg = document.createElement('img');
 	bigImg.src = 'images/images_1.jpg';
 	bigImgTitle = document.createElement('h1');
 	bigImgTitle.innerHTML = 'image 1';

 	leftContainer.appendChild(bigImgTitle);
 	leftContainer.appendChild(bigImg);

 	dFrag.appendChild(leftContainer);

 	var body = document.body;

 	body.appendChild(dFrag);


	//CREATING EVENTS
	//CHANGING THE BACKGROUND OF IMG CONTAINER

	
	rightContainer.addEventListener('mouseover', backgroundChange, true);
	rightContainer.addEventListener('mouseout', backgroundRestore, true);

	function backgroundChange(ev){
		// var currentNode = this;
		// currentNode.style.background = '#7C3C3C';
		var targ = ev.target.parentNode;
		if (targ.className === 'img-container') {
			targ.style.background = '#7C3C3C';
		}
	}

	function backgroundRestore(ev){
		// var currentNode = this;
		// currentNode.style.background = '#7C3C3C';
		var targ = ev.target.parentNode;

		if (targ.className === 'img-container'){
			targ.style.background = '#fff';
		}
	}


	//PRINTING THE CLICKED PICTURE ON THE LEFT
	rightContainer.addEventListener('click', printBigImage, true);

	function printBigImage(ev){
		var targ = ev.target.parentNode;

		if (targ.className === 'img-container'){
			leftContainer.innerHTML = '';
			var cloned = targ.cloneNode(true);
			cloned.style.background = '#fff';
			leftContainer.appendChild(cloned);


		}

	}

	//FILTERING
filter.addEventListener('change', getFiltered, false);
function getFiltered(){
	 var crit = filter.value;
	
	 var containers = document.getElementsByClassName('img-container');
	 var len = containers.length;
	
	 for(var j = 0; j < len; j++){
	 	var currentTitle = containers[j].getElementsByTagName('p')[0];
	 	 console.log(currentTitle);
	 	if (currentTitle.innerHTML.indexOf(crit) === -1) {
	 		containers[j].style.display = 'none';
	 	}
	 }
}


}