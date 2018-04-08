function validator()  {
var mail=document.getElementById("mail");
var pass=document.getElementById("pass");
//i want to make if statment
if (mail.checkValidity() === false){
alert("wrong Email please put @ ");

}
if (pass.checkValidity() === false) {

	alert(validationMessage);
}




}