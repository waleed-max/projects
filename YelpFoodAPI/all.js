var yelp = require('yelp-fusion');
var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var clientId = 'd71RSj0CSAPxF0fjIpVTzA';
var clientSecret = '5tzlTMYkNXJzT4MdU4kS2hQN98AzvW8r1JUi78ObKfNAgVGixGz2TzI9DNl7IPQ5';

// var search= {
//   term:'pizza hut',
//   location: 'austin, tx'
// };

// app.get("/", function(req, res) {
//   res.render("home.ejs")
// });











yelp.accessToken(clientId, clientSecret).then(response => {
  var client = yelp.client(response.jsonBody.access_token);

  client.search(search).then(response => {
    var firstResult = response.jsonBody.businesses[0];
    var prettyJson = JSON.stringify(firstResult, null, 30);
    

//create a server object:
http.createServer(function (req, res) {
	fs.readFile('./index.html', null,function(error, data){
	res.write(prettyJson); //write a response to the client
  res.end();
	})
   //end the response
}) //the server object listens on port 8080




function show(prettyJson){

	return "<div class='alert alert-info'>Here is the forecast for:"+ prettyJson + "</div>";
	
          
};
  });
});
