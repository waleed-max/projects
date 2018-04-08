var express = require ('express');
var app = express();

app.use(express.static("views"));


app.set('view engine', 'ejs');
app.set("views", __dirname + "/views");

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/searchresults', function(req, res) {
    var pickMovie = req.query.title;

var request = require('request');
request("https://api.themoviedb.org/3/movie/now_playing?api_key=dded8ff09b8b25580d172bce50a8bd79", function (error, response, body){

  if (!error && response.statusCode == 200) {
      var data=JSON.parse(body)
      res.render('searchresults.ejs', {data: data})
        console.log(body);
};
})

    });


app.listen(8000, function () {
    console.log('Example app listening on port 8000!');

});
