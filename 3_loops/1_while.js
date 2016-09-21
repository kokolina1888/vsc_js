var numberStr = '123',
	number = +numberStr,
	divider = 2,
	maxDivider = Math.sqrt(number),
	prime = true;

while (prime && (divider <= maxDivider)) {
	//need 0 to enter the execution code
	//0 evaluates to false
	//so we put ! to change it to true
   if (!(number % divider)) {
       prime = false;        
   }
   divider++;
}
console.log('the number is prime - ', prime);
