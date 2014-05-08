var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

var User = require('../src/user');
var request = require('superagent');

describe('User/Model', function() {
  var dummyUserData = {
    id: 1,
    first_name: 'First',
    last_name: 'Last',
    status: 'locked'
  };

  describe('#initialize', function() {
    it('should set the provided fields', function() {
      var user = new User(dummyUserData);

      expect(user.first_name).to.eq('First');
      expect(user.last_name).to.eq('Last');
      expect(user.status).to.eq('locked');
    });
  });

  describe('#get', function() {
    var user;

    beforeEach(function() {
      user = new User(dummyUserData);
      var response = {
        'id': 1,
        'first_name': 'Second First',
        'last_name': 'Second Last',
        'status': 'active'
      };
      sinon.stub(request, 'get').yields(response);
    });

    afterEach(function() {
      user = null;
      request.get.restore();
    });

    describe('with success xhr', function() {
      it('should call success cb', function(done) {
        user.get(function() {
          done();
        });
      });

      it('should set the newly provided data', function(done) {
        user.get(function() {
          expect(user.first_name).to.eq('Second First');
          expect(user.last_name).to.eq('Second Last');
          expect(user.status).to.eq('active');
          done();
        });
      });
    });
  });
});
