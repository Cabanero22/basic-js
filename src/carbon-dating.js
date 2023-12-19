const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
if (isNaN(sampleActivity) || typeof sampleActivity === typeof 1 || typeof sampleActivity === typeof [3]) {
  return false;
}
const argument = parseFloat(sampleActivity);
if (argument <= 0 || argument > MODERN_ACTIVITY || isNaN(argument)) {
  return false;
}
const k = 0.693 / HALF_LIFE_PERIOD;
const result = Math.ceil((Math.log(15 / argument)) / k);
return result;
}

module.exports = {
  dateSample
};
