/**
 * Return true if the given string is a palindrome. Otherwise, return false.
 *
 * A palindrome is a word or sentence that's spelled the same way both forward and backward,
 * ignoring punctuation, case, and spacing.
 * @param {string} str
 * @returns {boolean}
 */
function palindromes(str) {
  // first str all letters will be lower
  // after clean non-alpha-numaric chars and whitespace
  // str convert to all letters to array
  const strArr = str.toLowerCase().replace(/[\W_]/g, '').split('');
  // loop them half of array length
  for (let i = 0; i < Math.floor(strArr.length / 2); i += 1) {
    // control first letter and last letter iterate
    if (strArr[i] !== strArr[strArr.length - i - 1]) {
      return false;
    }
  }
  return true;
}

module.exports = palindromes;
