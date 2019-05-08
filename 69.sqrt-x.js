/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x < 0) {
    return 0;
  }

  if(x === 1){
      return 1
  }

  let left = 0;
  let right = x;
  let last = 0;
  let mid = (left + right) / 2;

  while (Math.abs(mid - last) > Number.EPSILON) {
    if (mid * mid > x) {
      right = mid;
    } else {
      left = mid;
    }

    last = mid;
    mid = (left + right) / 2;
  }

  return parseInt(last);
};
