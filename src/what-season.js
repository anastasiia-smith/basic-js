const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  } else {
    // Check if date is fake. Only when created using New Date () contains 0 in this property.
    if (Object.getOwnPropertyNames(date).length != 0) {
      throw new Error('Invalid date!'); 
    }
    if (Object.prototype.toString.call(date) != "[object Date]"){
      throw new Error('Invalid date!'); 
    }
    let month = date.getMonth()
    if (month === 0 || month === 1 || month === 11) {
      return 'winter'
    } else if (month === 2 || month === 3 || month === 4) {
      return 'spring'
    } else if (month === 5 || month === 6 || month === 7) {
      return 'summer'
    } else {
      return 'fall'
    }
  }
}

module.exports = {
  getSeason
};
