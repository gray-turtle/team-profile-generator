const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
  const engineer = new Engineer('steve', '809', 'steve@gmail.com', 'steve-git');

  expect(engineer.name).toBe('steve');
  expect(engineer.id).toBe('809');
  expect(engineer.email).toBe('steve@gmail.com');
  expect(engineer.github).toBe('steve-git');
  expect(engineer.getRole()).toBe('Engineer');
});