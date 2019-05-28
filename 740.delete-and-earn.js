/*
 * @lc app=leetcode id=740 lang=javascript
 *
 * [740] Delete and Earn
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  let values = Array(10001).fill(0);
  for (const i of nums) {
    values[i] += i;
  }

  let take = 0;
  let skip = 0;

  for (let i = 0; i < 10001; i++) {
    let takei = skip + values[i];
    let skipi = Math.max(skip, take);
    take = takei;
    skip = skipi;
  }

  return Math.max(skip, take);
};
