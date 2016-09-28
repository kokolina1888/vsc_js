var string1 = [1, 2, 4, -4, 4, -0, -1]; //масив, който проверяваме;
			string1.push(0, 0); //вкарваме принудително два последни елемента в масива
			var a=0; //брояч
			for (var i=0; i<=string1.length; i++) {
			if (string1[i]<= string1[i+1] && string1[i+1]>string1[i+2])
			a++; } 
			console.log(a);