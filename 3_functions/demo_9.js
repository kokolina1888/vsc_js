function strToUppercase(str){
	var myStr = str, res = [], finalRes;
	function strToArr(){
		var arr = myStr.split(' ');
		return arr;
	}
	res = strToArr();
	for (var i = 0; i < res.length; i++) {
		res[i] = res[i].toUpperCase();
	}

	finalRes = res.join('-');
	return finalRes;
}

console.log(strToUppercase('Super dump example'));
//console.log(strToArr('Super dump example'));