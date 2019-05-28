/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let f = [];
  f[0] = true;

  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (f[j] && wordDict.includes(s.substring(j, i))) {
        f[i] = true;
        break;
      }
    }
  }

  return !!f[s.length];
};
