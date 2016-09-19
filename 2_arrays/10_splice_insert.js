var items, items1, 
	el1, el2, el3;

	items 	= [ 2, 3, 6 ];
	items1 	= [ 1, 2, 3, 4, 5 ];
	el1 	= 'el1';
	el2 	= 'el2';


//items = items.splice(1, 0, el1);
items.splice(1, 0, el1);
console.log(items);

items1.splice(3, 0, el1, el2);
console.log(items1);
