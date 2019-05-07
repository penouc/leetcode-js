/*
 * @lc app=leetcode id=852 lang=javascript
 *
 * [852] Peak Index in a Mountain Array
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] > A[i + 1]) {
      return i;
    }
  }

  return A.length - 1;
};
