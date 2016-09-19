An if statement with else if and else clauses if ( isNaN(rate) ) { alert ( "You did not provide a number for the rate. n ) i } else if ( rate < 0 ) { alert ( "The rate may not be less than zero. 11 ); } else if ( rate > 12 ) { alert ( "The rate may not be greater than 12," ) ; } else { alert ( "The rate is: " + rate + n • n ) ; } 
An if statement with a compound conditional expression if ( isNaN(userEntry) II userEntry <~ 0 ) { alert ("Please enter a valid number greater than zero."); } 
Two ways to test whether a Bool,ean variable is true if isValid ~~ true ) { } if ( isValid ) { } II same as isValid ~~ true 
//Three ways to test whether a Boolean variable is false 
if (isValid == false ) { } 
if (!isValid == true ) { } 
if (!isValid) { }

//Two ways to test whether a Bool,ean variable is true 
if (isValid == true ) { } 



	//!!typical JS expression
if (isValid) {

	//statement
 } 

	//if isValid evaluates to true, the statement will be executed, 
	//else nothing happens