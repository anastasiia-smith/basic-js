const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // init new_arr
  let new_arr = []
  // loop though arr
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') {
      // add [i + 1] next 2 times
    } else if (arr[i] === '--double-prev') {
      // add [i - 1]
    } else if (arr[i] === '--discard-next') {
      // make [i + 1] = null
    } else if (arr[i] === '--discard-prev') {
      // make [i - 1] = null

    } else if (arr[i] === null) {
      // go to next elem in loop
    } else {
      // add to the end
    }
  }
  return new_arr
}

module.exports = {
  transform
};
