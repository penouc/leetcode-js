/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let left = 0;
  let right = matrix.length - 1;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    let curr = matrix[mid];
    let i = 0;
    let j = curr.length - 1;
    if (curr.length === 0) {
      left++;
      continue;
    }

    if (curr[0] <= target && curr[j] >= target) {
      while (i <= j) {
        let mmid = parseInt((i + j) / 2);
        if (curr[mmid] === target) {
          return true;
        } else if (curr[mmid] < target) {
          i = mmid + 1;
        } else {
          j = mmid - 1;
        }
      }
      break;
    } else if (curr[j] < target) {
      left = mid + 1;
    } else if (curr[0] > target) {
      right = mid - 1;
    }
  }

  return false;
};
