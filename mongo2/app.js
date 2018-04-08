var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cookie_shop");
var userSchema = new mongoose.Schema({
cookie: String,
price: Number,
tasty: Boolean


});

var Product = mongoose.model("Product", productSchema);


var cookieOne = new product ({//when you want to add more cookies please change it to cookietwo and three and dont past it togather becuase it e=will create the old cookies again
cookie: "sugar",
price:1.9,
tasty: true


});

	products.create({


		name: "Chocalte chip",
		price: 3.9,
		tasty: true
	}, function(err, user) {
		if(err) {
			console.log(err)
		} else {
		//	console.log(user);
		}
	});

	products.create({


		name: "raisin",
		price: 1.9,
		tasty: false
	}, function(err, user) {
		if(err) {
			console.log(err)
		} else {
		//	console.log(user);
		}
	});


	procuct.save(function(err, products){
		if(err) {

			console.log("there are error");
			console.log(err);
		} else {
			console.log("good");
			console.log(products);
		}
		})

	products.find({"tasty":true}, function(err, products){
		if(err) {
console.log("there was an error")
console.log(err);
} else {
	console.log("here is your search")
	console.log(products)
}
		
	});