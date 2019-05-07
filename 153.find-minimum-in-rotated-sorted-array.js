/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    let mid = parseInt((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  let rot = left;
  return nums[left];
};
