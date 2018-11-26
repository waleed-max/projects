// express is the framework
var express = require('express');
// app is an instance of express that we would use
var app = express();
// body parser is needed to parse a body of data received from a route
var bodyParser = require('body-parser');
// pg-promise is one of the libraries used to connect to postgres
var pg = require('pg-promise')();
var debug = require('debug')('appa');

var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// use json middleware to interpret json data received in a body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// connection details for pg db in AWS
const cn = {
    host: 'dinein?????????.us-east-1.rds.amazonaws.com',
    port: 5????,
    database: '????',
    user: '??????',
    password: '??????',
    idleTimeoutMillis: 15000
};

// create an instance of the db connection
const db = pg(cn);

// test if the root of your api works
app.get('/', (req, res)=>{
  res.send('You reached my api!')
})

app.get('/tables/:qrcode?', (req, res)=>{
  let qrcode = (req.params.qrcode)
  console.log(qrcode)
  if (qrcode) {
      db.any('SELECT * FROM tables WHERE lower(qrcode) = $1 ' + [qrcode])
          //' UNION ' +
          //'SELECT * FROM tables WHERE lower(table_id) = $1 ', [qrcode])
          .then(function(data) {
              debug('this is tables',data);
              res.json(data);
      });
  } else {
      db.any('SELECT * FROM tables')
          .then(function(data) {
              debug('Tables data is :', data);
              res.json(data);
      });
  }

})


app.get('/businesses', (req, res)=>{
  db.any('SELECT * FROM businesses')
      .then(function(data) {
          // success;
          debug('businesses data is : ', data);
          res.json(data);
      })
      .catch(function(error) {
          // error;
          console.log('Error :', error)
      });
})

// get bills or get one single build
app.get('/bills/:billid?', (req, res)=>{
 var whereclause ='';
 var billid=req.params.billid;
 if (billid) {
   whereclause = `AND bill_id = ${billid}`
 }
 db.any('SELECT * FROM bills WHERE 1=1 '+ whereclause)
     .then(function(data) {
         // success;
         debug('this is bills:', data);
         res.json(data);
     })
     .catch(function(error) {
         // error;
         console.log('Error :', error)
     });
})

// get one or all locations
app.get('/locations/:locationid?', (req, res)=>{
 var whereclause ='';
 var locationid=req.params.locationid;
 if (locationid) {
   whereclause = ` AND location_id = '${locationid}'`
 }
 db.any('SELECT * FROM locations WHERE 1=1 ' + whereclause)
     .then(function(data) {
         // success;
         debug('this is locations:',data);
         res.status(200).send(data);
     })
     .catch(function(error) {
         // error;
         console.log('Error :', error)
     });
});

//Bills POST
//Receives table_id and location_id to create a new bill inside the DB.
app.post('/bills', (req, res)=>{
  var newBill = req.body;
  console.log(newBill);
  db.one('insert into bills (table_id, location_id) values ($1, $2) returning *', [newBill.table_id, newBill.location_id])
      .then(function(data) {
          // success;
          debug('this is bills:',data);
          res.status(201).send(data);
      })
      .catch(function(error) {
          // error;
          console.log('Error :', error)
      });

})

//GET orders

app.get('/orders', (req,res)=>{
  var tableId = req.query.params.table_id;
  var locationId = req.query.params.location_id;
  var billId = req.query.params.bill_id;

  var tableIdFilter = '';
  var billIdFilter = '';

  if(tableId) var tableIdFilter = `AND table_id = '${tableId}'`
  if(billId) var billIdFilter = `AND bill_id = '${billId}'`;
  var queryStr = `
      SELECT
        b.location_id, b.table_id, b.bill_amount, b.bill_timestamp, oi.bill_id, oi.menu_item_id, mi.menu_id, mi.item_price, mi.item_description, mi.menu_item_pic, mi.menu_category
      FROM menu_items mi
      JOIN order_items oi using (menu_item_id)
      JOIN bills b using (bill_id)
        WHERE 1=1
          AND b.location_id = '${locationId}'
          ${tableIdFilter}
          ${billIdFilter}
      `;
   debug('Query String is : ', queryStr);

   db.any(queryStr)
       .then(function(data) {
           // success;
           debug('this is bills:', data);
           res.json(data);
       })
       .catch(function(error) {
           // error;
           console.log('Error :', error)
       });

}


// add an event handler on app to listen to events (api calls coming
// from browser or any other client.
app.listen(8000, ()=>{
  console.log('API server is running on port 8000')
})

module.exports = app;
