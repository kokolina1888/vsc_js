	var count = 0;
	function string(str){
		var ref=0;
		console.log(str);
			if (str==='') {
			console.log('Enter non empty array!')}
			//split array;
				arrSplit = str.split(' ');
			//	console.log (arrSplit);
			//lengt count
				arrLen = arrSplit.length;
					for (var i=0; i<arrLen; i++) {
						if (isNaN(arrSplit[i])==true) {
						var ref = 1;
						} 
						if (ref == 1) {
						console.log ('Array must  include only numbers! ');		
						}
						if (isNaN(arrSplit[i])==false && str!='') {
						if (arrSplit[i]>=arrSplit[i+1] ) {
						count += 1;
						} 	
					}
				}  
			
			//if count is not 0 then console log the res;
			if (count!=0) {
			console.log("Нарастващата редица е " + count +";");
		}
		if (str === 0) {
			console.log("Нарастващата редица е 1 ;");
			}
}
	// Result tests;
	//var str = "";	
	var str = "0";	 -3
	//var str = "-1 0 1 2 1 4 10 9 15 1";	
	//var str = "'3' 0 '0' 1 3 4 '0'";	
	//var str = "3 true";	
	//var str = "3 ‘pokughbv’ ‘1’";	
	string(str);
