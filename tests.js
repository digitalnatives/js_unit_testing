var expect = chai.expect;

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
    var user, server;

    beforeEach(function() {
      user = new User(dummyUserData);
      server = sinon.fakeServer.create();
    });

    afterEach(function() {
      user = null;
      server.restore();
    });

    describe('with success xhr', function() {
      beforeEach(function() {
        server.respondWith("GET", "/users/1", [200, {
            "Content-Type": "application/json"
          },
          '{ "id": 1, "first_name": "Second First", "last_name": "Second Last", "status": "active" }'
        ]);
      });

      it('should call success cb', function(done) {
        user.get(function() {
          done();
        });
        server.respond();
      });

      it('should set the newly provided data', function(done) {
        user.get(function() {
          expect(user.first_name).to.eq('Second First');
          expect(user.last_name).to.eq('Second Last');
          expect(user.status).to.eq('active');
          done();
        });
        server.respond();
      });
    });

    describe('with unsuccess xhr', function() {
      beforeEach(function() {
        server.respondWith("GET", "/users/1", [422, {
            "Content-Type": "application/json"
          },
          'error'
        ]);
      });

      it('should call the error cb', function(done) {
        user.get(null, function() {
          done();
        });
        server.respond();
      });
    });
  });
});
