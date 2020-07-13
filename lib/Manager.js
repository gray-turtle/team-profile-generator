const Employee = require('../lib/Employee.js');

function Manager(name, id, email, officeNumber) {
  Employee.call(this, name, id, email)

  this.officeNumber = officeNumber;
}

Manager.prototype.getOfficeNumber = function() {
  return this.officeNumber;
}

Manager.prototype.getRole = function() {
  return 'Manager';
}

module.exports = Manager;