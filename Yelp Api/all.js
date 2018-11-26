var yelp = require('yelp-fusion');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var clientId = '????????';
var clientSecret = '???????';
app.use(express.static('public'));
app.set('view engine', 'ejs');



app.get("/", function(req, res) {
  res.render('home.ejs')
});


app.get('/results', function (req, res) {

   var city = req.query.search;
    getBusinesses(city)
      .then(response=>{
        var idArr = [];
        var urlArr = [];
        var ratingArr = [];
        var priceArr = [];
      for(var i = 0; i < 10; i++){
        console.log(response)
        priceArr.push(response[i].price);
          idArr.push(response[i].name);
          urlArr.push(response[i].url);
          ratingArr.push(response[i].rating)
        }
          res.render("results.ejs", {idArr:idArr, urlArr:urlArr, ratingArr: ratingArr, priceArr: priceArr} )
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
        limit: 10
    };

   return accessClient(clientId, clientSecret).then(client=>{
        return client.search(searchRequest)
            .then(response=>{
              let businesses = Promise.resolve(response.jsonBody.businesses);

                return businesses;
            })
        .catch(err=>{
            console.error('Error in getBusinesses ', err)
        })
    })
}
app.listen(port, function() {
  console.log("Working on Port " + port)
});
