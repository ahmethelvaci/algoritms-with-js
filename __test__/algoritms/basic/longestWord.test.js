const longestWord = require('../../../src/algoritms/basic/longestWord');

test('test longestWord', () => {
  expect(longestWord('The quick brown fox jumped over the lazy dog')).toBe(6);
  expect(longestWord('May the force be with you')).toBe(5);
  expect(longestWord('Google do a barrel roll')).toBe(6);
  expect(longestWord('What is the average airspeed velocity of an unladen swallow')).toBe(8);
  expect(longestWord('What if we try a super-long word such as otorhinolaryngology')).toBe(19);
});
