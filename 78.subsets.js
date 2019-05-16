/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let res = [];
  helper(0, []);
  return res;

  function helper(startInd, sub) {
    res.push(sub.slice());

    for (let i = startInd; i < n; i++) {
      if (sub.length >= 1 && sub[sub.length - 1] >= nums[i]) continue;
      sub.push(nums[i]);
      helper(startInd + 1, sub);
      sub.pop();
    }
  }
};
