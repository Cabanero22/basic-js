const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (typeof arr !== 'object') {
      return 0;
    }
    let result = 1;
    for (let i = 0; i <= arr.length - 1; i += 1) {
      if (typeof arr[i] === 'object') {
        result = Math.max(result, 1 + this.calculateDepth(arr[i]));
      }
    }
    return result;
  }
}

module.exports = {
  DepthCalculator
};
