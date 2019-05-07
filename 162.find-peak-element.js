/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      return i;
    }
  }

  return nums.length - 1;
};
