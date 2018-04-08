var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/my_app");
var userSchema = new mongoose.Schema({
name: String,
age: Number,
email: String


});

var User = mongoose.model("User", userSchema);

//var theUser = new User({
	//name: "Jerry",
	//age: 45,
	//email: "jerry@gmail.com"
//});


//var theUser = new User({
//	name: "Karmer",
//	age: 47,
//	email: "jCosmoKramer@gmail.com"
//});

//theUser.save(function(err, user){
//	if(err){
		//console.log("there was an error saving.")
//	} else {
		//console.log("the data was successfuly saved")
		//console.log(user);
	//}
//});
	

	User.find({}, function(err, users){
		if(err) {
console.log("there was an error")
console.log(err);
} else {
	console.log("here is your search")
	console.log(users)
}
		
	});