/**
 * https://www.freecodecamp.org/challenges/reverse-a-string
 * this function is solve reverse word problem on the url.
 * @param {string} str - will reverse word or word group
 * @returns {string}
 */

function reverseString(str) {
  return str.split('').reverse().join('');
}

module.exports = reverseString;
