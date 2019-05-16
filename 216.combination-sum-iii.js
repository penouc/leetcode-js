/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 */
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let res = [];
  helper(1, n, []);

  function helper(start, left, sub) {
    if (left === 0 && sub.length === k) {
      res.push(sub.slice());
      return;
    }

    for (let i = start; i <= 9; i++) {
      sub.push(i);
      helper(i + 1, left - i, sub);
      sub.pop();
    }
  }

  return res;
};
