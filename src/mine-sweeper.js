const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  for (let row = 0; row < matrix.length; row++) {
    let resultRow = [];
    for (let col = 0; col < matrix[0].length; col++) {
      let counter = 0;
      const nextColElem = [row, col + 1];
      const prevColElem = [row, col - 1];
      const nextRowElem = [row + 1, col];
      const prevRowElem = [row - 1, col];
      const topLeftElem = [row - 1, col - 1];
      const topRightElem = [row - 1, col + 1];
      const bottLeftElem = [row + 1, col - 1];
      const bottRightElem = [row + 1, col + 1];
      const direction = [
        nextColElem, prevColElem, nextRowElem, prevRowElem,
        topLeftElem, topRightElem, bottLeftElem, bottRightElem
      ]
      const isInBorder = direction.filter((arr) => {
        return arr[0] >= 0 && arr[1] >= 0 && arr[0] < matrix.length && arr[1] < matrix[0].length;
      })
      const getBombs = isInBorder.filter(dir => {
        return matrix[dir[0]][dir[1]] === true;
      })
      counter += getBombs.length;
      resultRow.push(counter);
    }
    result.push(resultRow);
  }
  return result;
}

module.exports = {
  minesweeper
};
