/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let len = nums.length;
  let count = 0;
  helper(0);

  function helper(start) {
    if (start >= len) {
      return;
    }
    let sum = 0;
    for (let i = start; i < nums.length; i++) {
      sum += nums[i];
      if (sum === k) {
        count++;
      }
    }

    helper(start + 1);
  }

  return count;
};
