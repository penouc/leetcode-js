/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

function robbery(nums, l, r) {
  let pre = 0;
  let cur = 0;
  let temp = 0;

  for (let i = l; i <= r; i++) {
    temp = Math.max(pre + nums[i], cur);
    pre = cur;
    cur = temp;
  }

  return cur;
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let n = nums.length;

  if (n < 2) {
    console.log(n);
    return n ? nums[0] : 0;
  }

  return Math.max(robbery(nums, 0, n - 2), robbery(nums, 1, n - 1));
};
