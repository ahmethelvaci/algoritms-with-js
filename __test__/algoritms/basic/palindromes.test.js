const palindromes = require('../../../src/algoritms/basic/palindromes');

test('test palindromes', () => {
  expect(palindromes('eye')).toBe(true);
  expect(palindromes('_eye')).toBe(true);
  expect(palindromes('race car')).toBe(true);
  expect(palindromes('not a palindrome')).toBe(false);
  expect(palindromes('A man, a plan, a canal. Panama')).toBe(true);
  expect(palindromes('never odd or even')).toBe(true);
  expect(palindromes('nope')).toBe(false);
  expect(palindromes('almostomla')).toBe(false);
  expect(palindromes('My age is 0, 0 si ega ym.')).toBe(true);
  expect(palindromes('1 eye for of 1 eye.')).toBe(false);
  expect(palindromes('0_0 (: /- :) 0-0')).toBe(true);
  expect(palindromes('five|_/|four')).toBe(false);
});
