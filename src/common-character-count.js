const { NotImplementedError } = require("../extensions/index.js");

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
  function removeDuplicates(s) {
    let result = "";
    for (let char of s) {
      if (!result.includes(char)) {
        result += char;
      }
    }
    return result;
  }

  const unique1 = removeDuplicates(s1); //aabcc => abc
  const unique2 = removeDuplicates(s2); //adcaa => adc

  function compareStrings() {
    //maybe err
    let commonSymbols = "";

    const set1 = new Set(unique1);
    const set2 = new Set(unique2);

    for (let char of set1) {
      if (set2.has(char)) {
        commonSymbols += char;
      }
    }

    return commonSymbols;
  }
  const COMMON_SYMBOLS = new Set(compareStrings()); //ac

  function countCommonChars(s1, s2) {
    const countInS1 = {};
    const countInS2 = {};

    for (let char of s1) {
      countInS1[char] = (countInS1[char] || 0) + 1;
    }

    for (let char of s2) {
      countInS2[char] = (countInS2[char] || 0) + 1;
    }

    let commonCharCount = 0;

    for (let char of COMMON_SYMBOLS) {
      if (countInS1[char] && countInS2[char]) {
        commonCharCount += Math.min(countInS1[char], countInS2[char]);
      }
    }

    return commonCharCount;
  }
  const COMMON_CHAR_COUNT = countCommonChars(s1, s2);
  return COMMON_CHAR_COUNT;
}

module.exports = {
  getCommonCharacterCount,
};
