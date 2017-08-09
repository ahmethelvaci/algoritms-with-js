const reverseString = require('../../../src/algoritms/basic/reverseString');

test('is returned string', () => {
  expect(reverseString('hello')).toMatch(/\w/);
  expect(reverseString('hello')).not.toMatch(/\d/);
  expect(reverseString('hello')).not.toMatch(/\s/);
  expect(reverseString('hello')).not.toMatch(/\s/);
});

test('is returned reverse', () => {
  expect(reverseString('hello')).toMatch('olleh');
  expect(reverseString('Howdy')).toMatch('ydwoH');
  expect(reverseString('Greetings from Earth')).toMatch('htraE morf sgniteerG');
});
