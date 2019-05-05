/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.includes(target)) {
    return [nums.indexOf(target), nums.lastIndexOf(target)];
  }

  return [-1, -1];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let i = 0;
  let ret = [];

  while (nums[i] || nums[i] === 0) {
    if (nums[i] === target && nums[i - 1] !== target) {
      ret.push(i);
    }
    if (nums[i] === target && nums[i + 1] !== target) {
      ret.push(i);
    }
    i++;
  }

  return ret.length === 2 ? ret : [-1, -1];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let ret = [-1, -1];

  while (left < right) {
    let mid = parseInt((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  if (nums[left] !== target) {
    return ret;
  } else {
    ret[0] = left;
  }

  right = nums.length - 1;
  while (left < right) {
    let mid = parseInt((left + right) / 2) + 1;
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  ret[1] = right;

  return ret;
};
