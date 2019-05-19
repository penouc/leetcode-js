/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  let used = [];
  helper([]);

  function helper(sub) {
    if (sub.length === nums.length) {
      res.push(sub.slice());
      return;
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
        used[i] = true;
        sub.push(nums[i]);
        helper(sub);
        used[i] = false;
        sub.pop();
      }
    }
  }

  return res;
};
