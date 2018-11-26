//During the test the env variable is set to test
process.env.NODE_ENV = 'test';


//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
const should = chai.should();
// let should = require('should');
chai.use(chaiHttp);

  describe('/GET businesses', () => {
      it(' should GET all the businesses_id', (done) => {
        chai.request(app)
            .get('/businesses')
            .end((err, res) => {
                //console.log(res.body[0]);
                if(err) throw err;
                res.should.have.status(200);
                //should.exist(res.body);
                res.body.should.be.a('array');
                (res.body[0]).should.have.keys(
                    'city',
                    'state',
                    'business_id',
                    'business_name',
                    'address',
                    'zip',
                    'business_type',
                    'logo_url'
                );
                // res.body.length.should.eql(0);
              done();
            });
      });


  });

describe('/GET bills', () => {
    it(' should GET all the bill', (done) => {
        chai.request(app)
            .get('/bills')
            .end((err, res) => {
                if(err) throw err;
                res.should.have.status(200);
                //should.exist(res.body);
                res.body.should.be.a('array');
                // res.body.length.should.eql(0);
                done();
            });
    });


});

describe('/GET locatins', () => {
    it(' should GET all the locations', (done) => {
        chai.request(app)
            .get('/locations')
            .end((err, res) => {
                if(err) throw err;
                res.should.have.status(200);
                //should.exist(res.body);
                res.body.should.be.a('array');
                // res.body.length.should.eql(0);
                done();
            });
    });


});


  describe('/GET tables', () => {
      it(' should GET all the tables', (done) => {
        chai.request(app)
            .get('/tables')
            .end((err, res) => {
                if(err) throw err;
                res.should.have.status(200);
                //should.exist(res.body);
                res.body.should.be.a('array');
                // res.body.length.should.eql(0);
              done();
            });
      });

  after(()=>{
        // this is done to handle mocha version 4's more stringent process closure requirements
        // see here .. https://boneskull.com/mocha-v4-nears-release/#mochawontforceexit
        setInterval(()=> process.exit(), 6000);
  });
})

//---------
//Bills POST
//----------
describe('/POST bills', () => {
  it('Should create a new bill by the table and location id.', (done) => {
    let Body = {location_id: "288c303a-48b6-4777-979a-690e1591ced0", table_id: "MF1"}
    chai.request(app)
      .post('/bills')
      .send(Body)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        done();
      });
  });
})
  //describe('/GET tables')
