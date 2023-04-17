const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // create 3d arr
  let arr = []
  let counter = 0
  // loop through s1 
  for (let i = 0; i < s1.length; i++) {
    // loop though s2
    for (let j = 0; j < s2.length; j++) {
      // if letters are the same 
      if (s1[i] === s2[j]) {
          //add letter to array 
          console.debug(`Letter: ${s1[i]}`)
          arr.push(s1[i])
          break
      }
    }
  }
  // return 3arr.length
  console.debug(`Array length: ${arr.length + 1}`)
  console.debug(`Array: ${arr}`)
  return arr.length
}

module.exports = {
  getCommonCharacterCount
};
