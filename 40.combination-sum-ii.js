/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  let ret = [];
  var prefix = [];
  search(0, target);
  return ret;

  function search(idx, target) {
    if (target === 0 && idx === candidates.length) {
      return ret.push(prefix.slice());
    }
    if (target < 0 || idx === candidates.length) {
      return;
    }
    if (idx === candidates.length) return;

    prefix.push(candidates[idx]);
    search(idx + 1, target - candidates[idx]);
    prefix.pop();
    if (prefix[prefix.length - 1] !== candidates[idx]) {
      search(idx + 1, target);
    }
  }
};
