/*
 * @lc app=leetcode id=378 lang=javascript
 *
 * [378] Kth Smallest Element in a Sorted Matrix
 */

function getLessEqual(matrix, val) {
  let res = 0;
  let n = matrix.length,
    i = n - 1,
    j = 0;
  while (i >= 0 && j < n) {
    if (matrix[i][j] > val) i--;
    else {
      res += i + 1;
      j++;
    }
  }

  return res;
}
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  let n = matrix.length;
  let left = matrix[0][0];
  let right = matrix[n - 1][n - 1];

  while (left <= right) {
    let mid = left + parseInt((right - left) / 2);

    let count = getLessEqual(matrix, mid);

    if (count < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
