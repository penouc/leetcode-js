/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let res = [];
  helper(0, []);
  return res;

  function helper(startInd, sub) {
    res.push(sub.slice());

    for (let i = startInd; i < n; i++) {
      if (nums[i] === nums[i - 1] && i !== startInd) continue;
      sub.push(nums[i]);
      helper(i + 1, sub);
      sub.pop();
    }
  }
};
