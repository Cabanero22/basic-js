const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let secondArr = arr.filter((arrItem) => {
        return arrItem !== -1;
    });
    secondArr = secondArr.sort((a, b) => {
    return a - b;
    });
    let i = 0;
    const result = arr.map((arrItem) => {
        if (arrItem === -1) return -1;
        else return secondArr[i++];
    })
    return result
}

module.exports = {
  sortByHeight
};
