//let assert = require('assert');
var assert = require('chai').assert
let request = require('supertest');
let app = require('../app.js');
let chai = require('chai');
let should = chai.should();
let chaiHttp = require('chai-http');


chai.use(chaiHttp);
let expect = chai.expect;


const newRequest = {
  text: "test"
}

let server = null;
const startApp = () => {server = app.listen()};
const stopApp = () => server.close();

describe('Start ...', () => {
  it('Start and Stop to server', () => {
    before(startApp);
    after(stopApp);
  });
  
});

describe('POST / Test con supertest', function() {
  it('el texto debe ser el mismo que el envido "test"', function(done) {
    request(app)
      .post('/')
      .send(newRequest) // x-www-form-urlencoded upload
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body.text).to.be.equal( newRequest.text);
        //console.log(res.body.text)
        done();
      });
  });
});


describe('POST / tests con chai', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .post('/')
        .send(newRequest)
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.have.property('text');
          res.body.should.be.a('object');
          res.body.text.should.equal(newRequest.text);
          done();
        });
    });
});

