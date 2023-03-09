const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);

suite('Unit Tests', function () {
  suite('Users', function () {
    test("Test GET /hello with no name", function (done) {
      chai.request(server).get("/hello") .end(function (err, res) {
          assert.equal(res.status, 200, 'response status should be 200');
          assert.equal(res.type, 'application/json', 'response should be json');
          assert.isString(res.body.firstname, 'Firstname should be a string');
          assert.isString(res.body.lastname, 'Lastname should be a string');
          done();
        });
    });
  });
});
