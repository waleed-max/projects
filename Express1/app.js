var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Welcome to the ACC home page!')

})
 

 app.get('/bootcamp', function (req, res) {
  res.send('We are the best!')

})

 app.get('/fullstack', function (req, res) {
  res.send('All others are great , but we are on the top!')

})


 app.get('/instructors', function (req, res) {
  res.send('they are the best in the world!')
})

app.listen(3000)