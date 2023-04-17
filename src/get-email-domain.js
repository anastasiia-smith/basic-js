const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // look though email search for index of @ 
  let index = 0;
  for (let i = email.length; i > 0; i--) {
    if (email[i] === '@') {
      index = i
      break
    }
  }
  // slice at index
  let domain = email.slice(index + 1)
  return domain
}

module.exports = {
  getEmailDomain
};
