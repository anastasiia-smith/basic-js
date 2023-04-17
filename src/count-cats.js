const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // create count
  let count = 0
  // loop through outer array
  for (let i = 0; i < matrix.length; i++) {
    // loop though inner array
    for (let j = 0; j < matrix[i].length; j++) {
      // check if the same as ^^ if yes
      if(matrix[i][j] === "^^") {
        count++
      }
    }
  }
  return count
}

module.exports = {
  countCats
};
