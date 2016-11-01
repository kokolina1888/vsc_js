function uniFilter(param){
	var flag = 0, 
		resFlag = 0,
		arr,
		res,
		len,
		resLen;
if (param !== '') {
	arr = param.split(' ');
	res = [];
	len = arr.length;

	for(var i = 0; i < len; i++){
		if (isNaN(+arr[i])) {
			flag += 1;			
		}
	}
	if (flag === len) {
		console.log('The input values must be convertible to a number');
	}
	else {
		res = [];
		for(var j = 0; j < len; j++){
			var currentVal = +arr[j];

			if(!isNaN(currentVal)){

				resLen = res.length;
				for(var m = 0; m < resLen; m++){
					if (currentVal === res[m]) {
						resFlag = 1;						
					}
				}
				if (resFlag === 0) {
					res.push(currentVal);
				}
				resFlag = 0;

			}
		}
	}



	console.log(res);


}
else {
	console.log('The input must not be an empty string');
}
}

//var str = '';
//var str = 'mk pp we vfv';
var str = '2 “” add “” 1 1 asd 2 “” 3';	
uniFilter(str);
// ‘’                    The input must not be an empty string
// ‘1 2 2 6 8 6 7 8’            [1, 2, 6, 8, 7]
// ‘0 0 0 0 0 ’                [0]
// ‘mk pp we vfv’            ‘The input values must be convertible to
// a number’
// ‘1 br 2 1 werr 3 1’        [1, 2, 3]
// ‘2 “” add “” 1 1 asd 2 “” 3’