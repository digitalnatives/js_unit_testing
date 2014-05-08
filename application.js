var User;

User = (function() {
  function User(plainObject) {
    this.parse(plainObject);
  }

  User.prototype.parse = function(plainObject) {
    this.id = plainObject.id;
    this.first_name = plainObject.first_name;
    this.last_name = plainObject.last_name;
    this.status = plainObject.status;
  };

  User.prototype.get = function(cbSuccess, cbError) {
    var self = this;

    $.get("/users/" + this.id, function(data) {
      self.parse(data)
      cbSuccess();
    }).fail(function(error, m) {
      cbError();
    });

  };

  return User;

})();
