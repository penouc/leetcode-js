/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let result = [];

  function dfs(current, startIndex, currentSum) {
    if (currentSum === target) {
      result.push(current);
      return;
    }
    if (currentSum > target) {
      return;
    }

    for (let index = startIndex; index < candidates.length; index++) {
      dfs(
        current.concat(candidates[index]),
        index,
        currentSum + candidates[index]
      );
    }
  }

  dfs([], 0, 0);
  return result;
};
