var yelp = require('yelp-fusion');
var http = require('http');
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static('public'));
var clientId = 'd71RSj0CSAPxF0fjIpVTzA';
var clientSecret = '5tzlTMYkNXJzT4MdU4kS2hQN98AzvW8r1JUi78ObKfNAgVGixGz2TzI9DNl7IPQ5';



app.get("/", function(req, res) {
  res.render('home.ejs')
});


app.get('/results', function (req, res) {
    
    var city = req.query.search;
    getBusinesses(city)
      .then((response)=>{
          console.log(response);
          res.render("results.ejs")
      })
      .catch(err=>{
          console.error('Error found in getBusinesses call ', err);
      })
});



// var client;

//Chained Callback
function accessClient(req, res){
  // if(client) {return client}
  return yelp.accessToken(req, res).then(
    function(response){
      let client = Promise.resolve(yelp.client(response.jsonBody.access_token));
      // console.log('client object is ', client);
      return client;
    } 
  )
}

function getBusinesses(city) {
    var searchRequest = {
        term:"Restaurants",
        location: city,
        limit: 20
    };

    return accessClient(clientId, clientSecret).then(client=>{
        return client.search(searchRequest)
            .then(response=>{
                let businesses = Promise.resolve(response.jsonBody.businesses);
                // console.log('businesses is ', businesses);
                console.log(businesses);
                return businesses;
            })
        .catch(err=>{
            console.error('Error in getBusinesses ', err)
        })
    })
}
app.listen(3000, function() {
  console.log("Working on Port 3000")
});


          
