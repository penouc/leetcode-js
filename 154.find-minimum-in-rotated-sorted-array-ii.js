/*
 * @lc app=leetcode id=154 lang=javascript
 *
 * [154] Find Minimum in Rotated Sorted Array II
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;

  while (left < right) {
    mid = left + parseInt((right - left) / 2);

    if (nums[mid] === nums[right]) {
      right--;
    } else if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  //   console.log(left);
  return nums[left];
};
