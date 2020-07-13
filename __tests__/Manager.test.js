const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
  const manager = new Manager('steve', '809', 'steve@gmail.com', '201');

  expect(manager.name).toBe('steve');
  expect(manager.id).toBe('809');
  expect(manager.email).toBe('steve@gmail.com');
  expect(manager.officeNumber).toBe('201');
  expect(manager.getRole()).toBe('Manager');
});