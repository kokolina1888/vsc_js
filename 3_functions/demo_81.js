var aa = 10;
var bb = 20;

function print(a, b){
	if(arguments.length === 0){
		console.log('no params');
	}
	
	else {
		if (a>b) {console.log('yes');}
		else if (a<b) {console.log('no');}
		else {console.log('equal');
	}	}

	

}

print(aa, bb);
var num = '1008';
var len = num.length;
console.log(num.substr(len-1));
