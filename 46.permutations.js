/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */
function helper() {}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let n = nums.length;
  let res = [];
  helper([]);

  function helper(sub) {
    if (sub.length === n) {
      res.push(sub.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (sub.includes(nums[i])) continue;
        sub.push(nums[i]);
        helper(sub);
        sub.pop();
      }
    }
  }

  return res;
};
