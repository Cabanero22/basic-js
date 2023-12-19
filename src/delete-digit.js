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
  let string = n.toString();
  let array = [];
  for (let i = 0; i < string.length; i++) {
  let result = string.replace(string[i], '');
  result = Number(result);
  array.push(result);
  }
  const answer = Math.max(...array);
  return answer;
}

module.exports = {
  deleteDigit
};
