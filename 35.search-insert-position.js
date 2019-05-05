/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  }
  if (target < nums[0]) {
    return 0;
  }
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }

  let i = 0;
  while (nums[i] && nums[i + 1]) {
    if (target > nums[i] && target < nums[i + 1]) {
      return i + 1;
    }
    i++;
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let low = 0;
  high = nums.length - 1;

  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
};
