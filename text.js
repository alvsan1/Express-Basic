var assert = require('assert');
var request = require('supertest');
var app = require('./app.js');


describe('POST /', function() {
  it('el texto debe ser el mismo que el envido should be an case-insensitive match for "john"', function(done) {
    request(app)
      .post('/')
      .send('text=test1') // x-www-form-urlencoded upload
      .set('Accept', 'application/json')
      .then(response => {
          assert(response.body.text, 'test1')
      })
  });
});
