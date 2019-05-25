/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = Number.NEGATIVE_INFINITY;
  helper(0);

  function helper(start) {
    if (start > nums.length) {
      return;
    }
    let temp = 0;
    for (let i = start; i < nums.length; i++) {
      temp += nums[i];
      max = Math.max(max, temp);
    }
    helper(start + 1);
  }

  return max;
};

var maxSubArray = function(nums) {
  let dp = [];
  dp[0] = nums[0];
  let max = dp[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
    max = Math.max(max, dp[i]);
  }

  return max;
};
