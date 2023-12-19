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
  let smallStr;
  let longStr;
  let result = 0;
  if(s1 > s2) {
    smallStr = s2;
    longStr = s1
  } else {
    smallStr = s1;
    longStr = s2;
  }
  for (let i = 0; i < smallStr.length; i++) {
    if (longStr.includes(smallStr[i])) {
      result = result + 1;
      longStr = longStr.replace(smallStr[i], '');
    } else {
      result = result + 0;
    }
  }
 return result
}

module.exports = {
  getCommonCharacterCount
};
