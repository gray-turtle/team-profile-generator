const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee('steve', '809', 'steve@gmail.com');

  expect(employee.name).toBe('steve');
  expect(employee.id).toBe('809');
  expect(employee.email).toBe('steve@gmail.com');
  expect(employee.getRole()).toBe('Employee');
});