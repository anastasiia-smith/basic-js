const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // change num to str join '' to array
  let arr = Array.from(String(n), Number);
  console.debug(`Array ${arr}`)

  // find the min nimber in array and get it index 
  let min = Math.min(...arr)
  console.debug(`Min ${min}`)
  // find its index

  // and splice it

  // make a new number out of the array and return it
  let new_n = Number(arr.join(''))
  console.debug(`Num ${new_n}`)
  return new_n
}

module.exports = {
  deleteDigit
};
