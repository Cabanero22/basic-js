const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members) === false || members.length === 0) {
    return false
  }
  let result = members.map(function (item) {
    if (typeof item === 'string'){
      let newItem = item.trim().toUpperCase();
      return newItem[0];
    }
    return null;
    }).filter(item => item).sort().join('');
  console.log(result)
  return result;
}

module.exports = {
  createDreamTeam
};
