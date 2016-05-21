function inputValidation(){
	    var fname, lname, email, contactNo, text;
	    var nameRegex = /^[a-zA-Z ]{2,30}$/;
	     var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	     var contactNoRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	     var zipcodeRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
	     var v,w,x,y,z;
	    
	    fname = $('#fname').val();
	    lname = $("#lname").val();
	    email = $("#email").val();
	    contactNo = $("#contactNo").val();
	    zipcode = $("#zipcode").val();
	    
	    
	    //validating first name
	    if(fname == null || fname == "" ){
	    	document.getElementById("fname-error").innerHTML = "Please enter your first name";
	    	$("#fname-error").show();
	    }else if(!nameRegex.test(fname)){
	    	document.getElementById("fname-error").innerHTML = "first name should contain only alphabets, space character between words, min 2 and max 15 characters";
	        $("#fname-error").show();
	    }else if(nameRegex.test(fname)){
	    	x=true;
	    	$("#fname-error").hide();
	    }
	    
	    //validating last name
	    if(lname == null || lname == ""){
	    	document.getElementById("lname-error").innerHTML = "Please enter your last name";
	    	$("#lname-error").show();
	    }else if(!nameRegex.test(lname)){
	    	document.getElementById("lname-error").innerHTML = "last name should contain only alphabets, space character between words, min 2 and max 15 characters";
	        $("#lname-error").show();
	    }else if(nameRegex.test(lname)){
	    	y=true;
	    	$("#lname-error").hide();
	    }
	          
	    //validating email
	    if(email == null || email == ""){
	    	document.getElementById("email-error").innerHTML = "Please enter your email";
	    	$("#email-error").show();
	    }else if(!emailRegex.test(email)){
	    	document.getElementById("email-error").innerHTML = "please provide a valid email address eg: something@something.com";
	        $("#email-error").show();
	    }else if(emailRegex.test(email)){
	    	z=true;
	    	$("#email-error").hide();
	    }
	    
	    //validating contact No
	    if(contactNo == null || contactNo == ""){
	    	document.getElementById("contact-no-error").innerHTML = "Please enter your contact no";
	    	$("#contact-no-error").show();
	    }else if(!contactNoRegex.test(contactNo)){
	    	document.getElementById("contact-no-error").innerHTML = "Please enter valid phone number that should contain numbers and correct format eg: XXX-XXX-XXXX or XXX.XXX.XXXX or XXX XXX XXXX";
	    	$("#contact-no-error").show();
	    }else if(contactNoRegex.test(contactNo)){
	    	w = true;
	    	$("#contact-no-error").hide();
	    }
	    
	    //validating zipcode
	    if(zipcode == null || zipcode == ""){
	    	document.getElementById("zipcode-error").innerHTML = "Please enter your zipcode";
	    	$("#zipcode-error").show();
	    }else if(!zipcodeRegex.test(zipcode)){
	    	document.getElementById("zipcode-error").innerHTML = "Please enter valid USA zipcode that should contain numbers eg: 56445";
	    	$("#zipcode-error").show();
	    }else if(zipcodeRegex.test(zipcode)){
	    	v = true;
	    	$("#zipcode-error").hide();
	    }
	    
	    if(x && y && z && w && v){
	    	window.location = "ThankYou.html";
	    }
	    
}