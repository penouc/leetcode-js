/*
 * @lc app=leetcode id=784 lang=javascript
 *
 * [784] Letter Case Permutation
 */
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  let res = [];
  helper(0, S.split(""));

  function helper(ind, sub) {
    if (ind === S.length) {
      res.push(sub.join(""));
      return;
    }

    if (!!+S[ind] || S[ind] === "0") {
      helper(ind + 1, sub);
      return;
    }

    sub[ind] = S[ind].toLowerCase();
    helper(ind + 1, sub);

    sub[ind] = S[ind].toUpperCase();
    helper(ind + 1, sub);
  }

  return res;
};
