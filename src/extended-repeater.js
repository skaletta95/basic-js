const { NotImplementedError } = require("../extensions/index.js");

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
function repeater(str, options = {}) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  const baseString = String(str);
  const additionString = String(addition);
  const repeatedAddition = Array(additionRepeatTimes).fill(additionString).join(additionSeparator);
  const baseWithAddition = baseString + repeatedAddition;
  const result = Array(repeatTimes).fill(baseWithAddition).join(separator);

  return result;
}

module.exports = {
  repeater,
};
