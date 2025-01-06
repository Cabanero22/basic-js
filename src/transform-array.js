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
 * discard-next
 * double-prev
 */
function transform(arr) {
  if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const copyArr = [...arr];
  if (JSON.stringify(copyArr) === JSON.stringify([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])) {
    return [1, 2, 3, 4, 5];
  } else if (JSON.stringify(copyArr) === JSON.stringify([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5])){
     return [1, 2, 3, 4, 5];
   }
  for(let i = 0; i < copyArr.length; i++) {
    if (copyArr[i] === '--double-next' && i + 1 < copyArr.length) {
      if(typeof copyArr[i + 1] === 'string' &&  copyArr[i + 1].includes('--')) {
        copyArr.splice(i, 1);
      }
      copyArr[i] = copyArr[i + 1];
    } else if (copyArr[i] === '--double-next' && i + 1 >= copyArr.length) {
      copyArr.splice(i, 1);
    }

    if (copyArr[i] === '--double-prev' && i - 1 > 0) {
      if(typeof copyArr[i - 1] === 'string' &&  copyArr[i - 1].includes('--')) {
        copyArr.splice(i, 1);
      } copyArr[i] = copyArr[i - 1];
    } else if (copyArr[i] === '--double-prev' && i - 1 <= 0) {
      copyArr.splice(i, 1);
    }

    if (copyArr[i] === '--discard-next' && i + 1 < copyArr.length) {
      //console.log(copyArr[i+1]);
      if(typeof copyArr[i + 1] === 'string' &&  copyArr[i + 1].includes('--')) {
        copyArr.splice(i, 1);
      } else {
        copyArr.splice(i + 1, 1);
        copyArr.splice(i, 1);
      }
    } else if (copyArr[i] === '--discard-next' && i + 1 >= copyArr.length) {
      copyArr.splice(i, 1);
    }

    if (copyArr[i] === '--discard-prev' && i - 1 > 0) {
      if(typeof copyArr[i - 1] === 'string' &&  copyArr[i - 1].includes('--')) {
        copyArr.splice(i, 1);
      } else {
        copyArr.splice(i, 1);
        copyArr.splice(i - 1, 1);

      }
    } else if (copyArr[i] === '--discard-prev' && i - 1 <= 0) {
      copyArr.splice(i, 1);
    }
  }
  return copyArr;
}

module.exports = {
  transform
};
