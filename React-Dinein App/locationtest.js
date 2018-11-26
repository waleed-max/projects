//During the test the env variable is set to test
process.env.NODE_ENV = 'test';


//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
const should = chai.should();
// let should = require('should');
chai.use(chaiHttp);

  describe('/GET locations', () => {
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

  after(()=>{
        // this is done to handle mocha version 4's more stringent process closure requirements
        // see here .. https://boneskull.com/mocha-v4-nears-release/#mochawontforceexit
        setInterval(()=> process.exit(), 2000);
    })
  });

  describe('/GET locations', () => {
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

  after(()=>{
        // this is done to handle mocha version 4's more stringent process closure requirements
        // see here .. https://boneskull.com/mocha-v4-nears-release/#mochawontforceexit
        setInterval(()=> process.exit(), 2000);
    })
  });
