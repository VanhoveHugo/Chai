const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
const server = require('../index');

chai.use(chaiHttp);

suite('Unit Tests', function () {
  suite('Users', function () {
    test('User should have valid email', function (done) {
      chai
        .request(server)
        .post('/users')
        .send({ email: 'test' })
        .end(function (err, res) {
          assert.equal(res.status, 400);
          done();
        }
      );
    });

    test('User should have name and firstname', function (done) {
      chai
        .request(server)
        .post('/users')
        .send({ name: '', firstName: '' })
        .end(function (err, res) {
          assert.equal(res.text, 'name and firstName are required');
          done();
        }
      );
    })

    test('User should have more than 13 years old', function (done) {
      chai
        .request(server)
        .post('/users')
        .send({ birthdate: '2020-01-01' })
        .end(function (err, res) {
          assert.equal(res.status, 400);
          done();
        }
      );
    });
  });
});
