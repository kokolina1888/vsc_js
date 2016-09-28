(function(){
function printMatrix(num){
	var lines = num, i, j, helper;

	for(i = 1; i<= num; i++){
		document.write('<p>');
		helper = 0;
		j = i;
		for(helper = 0; helper < num; helper++){
		document.write(j + ' ');
		j++;
		}
		document.write('</p>');
	}
}//end of printMatrix

printMatrix(2);
printMatrix(3);
})();