let expect = require('chai').expect;
let request = require('request');

describe('Status', function() {
  describe ('Landing page', function() {
    it('status', function(done){
      request('http://localhost:8000/', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
});


describe('Status', function() {
  describe ('search page', function() {
    it('status', function(done){
      request('http://localhost:8000/search/:name/:type', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
});