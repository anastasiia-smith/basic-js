const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0
  // Convert n to string
  let str = n.toString()
  // Go through each symbol of str 
  for (let i = 0; i < str.length; i++) {
    // Add each converted to num symbol form str to sum 
    sum += Number(str[i])
  }
  // Check if sum under 10 else do recursion
  if (sum < 10) {
    return sum
  } else {
    return getSumOfDigits(sum)
  }
}

module.exports = {
  getSumOfDigits
};
