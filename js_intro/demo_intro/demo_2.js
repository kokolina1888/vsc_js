var joinList = function() { 
	var emailAddressl = getElementById('email_addressl').value;
	var emai1Address2 = getElementById('email_address2') .value; 
}; 
if (emailAddressl === '' ) {
 alert ("Email Address is required. " ); 
} else if ( emai1Address2 === "") {
 alert ("Second Email Address is required. " ); 
} else if (emailAddressl !== emai1Address2) { 
	alert ("Second Email entry must equal first entry." ); 
} else if (getElementById("first_name").value === '"') { 
	alert ( "First Name is required."); 
} else { getElementById( "email_form" ).submit(); } 
