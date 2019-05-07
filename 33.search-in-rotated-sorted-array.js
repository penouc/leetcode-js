/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  return nums.indexOf(target);
};

var search = function(nums, target) {
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
  left = 0;
  right = n - 1;
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    let realmid = (mid + rot) % n;

    if (nums[realmid] === target) {
      return realmid;
    } else if (nums[realmid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};
