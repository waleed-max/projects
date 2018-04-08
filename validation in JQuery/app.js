$(document).ready(function(){
	$("#submit").click(function(e){
		var email = $("#email").val();
		var pswd = $("#pswd").val();
		var name = $("#name").val();
		var pswd2 = $("#pswd2").val();

$("#dodo").addClass("dodo");
$("#dodo1").addClass("dodo");
$("#dodo2").addClass("dodo");
$("#dodo3").addClass("dodo");
		

		if(pswd.length <8 ){
			$("#dodo").removeClass("dodo");

e.preventDefault();
		}


 if(!validateEmail(email)) {
	$("#dodo1").removeClass("dodo");
e.preventDefault();
}

 if(name.length < 4 &&  !validateName(name)) {
$("#dodo2").removeClass("dodo");
e.preventDefault();
}

 if(pswd2 !== pswd) {
	$("#dodo3").removeClass("dodo");
	e.preventDefault();
}
});

	function validateEmail(Email) {
    var filter = /[^\s@{}]+@[^\s1-9@{}]+\.[^\s1-9@]+/;
    if (filter.test(Email)) {
        return true;
    }
   }

function validateName(Name) {
    var filter = /[^\s@{}]+/;
    if (filter.test(Name)) {
        return true;
    }
    else {
    	return false;
    }
   }



})



 //I will use it one day Regax not for the instructors //

//  /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// /([a-z].*[A-Z])|([A-Z].*[a-z])([0-9])+([!,%,&,@,#,$,^,*,?,_,~])/;
//  /([0-9])/;
//  /([!,%,&,@,#,$,^,*,?,_,~])/;
//  RegExp('[0-9]+'); //make sure the var is a number

 