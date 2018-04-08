var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)

// double function (num){
// 	return num * 2;
// }

// double(3);


//make a route (app.get / res.send) using a variable (req.params). You should be able
//write any variable that will show up on the screen when you type it into the url

// use : to create the variable
app.get('/fruit/:something', function (req, res) {
	

	res.send('fruit' + '  ' + req.params.something)
});


app.get('/bankaccount/:name/:number', function (req, res) {
	var nam = req.params.name;
	var num = req.params.number;
if (num>= 50) {
	res.send('SO,' + nam + ',I undeerstand you have $' + num +' in your bank account.Can you loan me some money?please');
}
	else if (req.params.number< 50) {
		res.send(nam + ', do you enjoy living life dangerously on the edge?');

	}

});


	//create a vaar using use req.params to input any text into the variable 

//use res.send to send the information to the screen with your var