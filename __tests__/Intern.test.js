const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
  const intern = new Intern('steve', '809', 'steve@gmail.com', 'UofU');

  expect(intern.name).toBe('steve');
  expect(intern.id).toBe('809');
  expect(intern.email).toBe('steve@gmail.com');
  expect(intern.school).toBe('UofU');
  expect(intern.getRole()).toBe('Intern');
});