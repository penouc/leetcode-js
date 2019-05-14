/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

function backTracking(str, digits, arr) {
  let map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };

  if (digits.length === 0) {
    arr.push(str);
  } else {
    let letters = map[digits[0]];
    console.log(digits, digits[0], map[digits[0]]);
    digits = digits.slice(1);

    for (let i = 0; i < letters.length; i++) {
      letter = letters[i];
      backTracking(str + letter, digits, arr);
    }
  }
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) return [];
  let arr = [];

  backTracking("", digits, arr);

  return arr;
};
