/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  let pre = 1;
  let cur = 2;
  let ret = 0;

  for (let i = 3; i <= n; i++) {
    ret = pre + cur;
    pre = cur;
    cur = ret;
  }

  return ret;
};
