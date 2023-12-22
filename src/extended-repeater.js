const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';

  let addition;
  if (options.addition !== undefined) {
    addition = String(options.addition);
  } else {
    addition = '';
  } ;

  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  const additionRepeat = (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
  const strRepeat = (str + additionRepeat + separator).repeat(repeatTimes - 1) + str + additionRepeat;
  return strRepeat;

}

module.exports = {
  repeater
};
