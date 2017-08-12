/**
 * Return the length of the longest word in the provided sentence.
 * Your response should be a number.
 * 
 * @param {string} str - word group or sentence
 * @returns {number}
 */
function longestWord(str) {
  // split sentence
  // transfer to each word length from array
  // word length array sort
  // return first
  return str.split(' ')
    .map(w => Number(w.length))
    .sort((a, b) => (b - a))[0];
}

module.exports = longestWord;
