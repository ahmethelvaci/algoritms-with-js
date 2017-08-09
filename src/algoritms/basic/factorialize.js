/**
 * https://www.freecodecamp.org/challenges/factorialize-a-number
 * Return the factorial of the provided integer.
 * 
 * If the integer is represented with the letter n, a factorial is 
 * the product of all positive integers less than or equal to n.
 * 
 * Factorials are often represented with the shorthand notation n!
 * 
 * For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 * 
 * @param {number} num - will factorialize number
 * @returns {number}
 */

function factorialize(num) {
  let fact = 1;
  for (let i = 1; i <= num; i += 1) {
    fact *= i;
  }
  return fact;
}

module.exports = factorialize;
