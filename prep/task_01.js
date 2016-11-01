function myFunc(param){
	var n = +param[0];
	var m = param[1], len1, len2, helper = [];


m = m.toString().split('');
len1 = m.length;
//console.log(m);
for(var i = 0; i < len1; i++){
	if(!isNaN(+m[i])){
		helper.push(m[i]);		
	}
}

//console.log(helper);
len2 = helper.length;
	// console.log(n);
if(len2 >= n){

console.log(helper[len2-n]);
} else {
	console.log('not enough numbers');
}

}
var arr = [3, 125223];
myFunc(arr);