var request = require("superagent");

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

  User.prototype.get = function(cbSuccess) {
    var url = "/users/" + this.id;

    request.get(url, function(res) {
      this.parse(res);
      cbSuccess();
    }.bind(this));
  };

  return User;

})();

module.exports = User;
