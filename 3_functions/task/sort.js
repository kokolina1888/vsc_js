var arr = [['a', 'upper'],
			['m', 'upper'],
			['b', 'lower']
	];

sorted = arr.sort(function(p1, p2){
return p1[0] > p2[0];
});

console.log(arr);
