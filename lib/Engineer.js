const Employee = require('../lib/Employee.js');

function Engineer(name, id, email, github) {
  Employee.call(this, name, id, email)

  this.github = github;
}

Engineer.prototype.getGithub = function() {
  return this.github;
}

Engineer.prototype.getRole = function() {
  return 'Engineer';
}

module.exports = Engineer;