/*
 * @lc app=leetcode id=668 lang=javascript
 *
 * [668] Kth Smallest Number in Multiplication Table
 */
function enough(x, m, n, k) {
  let count = 0;

  for (let i = 1; i <= m; i++) {
    count += Math.min(parseInt(x / i), n);
  }

  return count >= k;
}

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
  let left = 1;
  let right = m * n;

  while (left < right) {
    let mid = left + parseInt((right - left) / 2);
    if (!enough(mid, m, n, k)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};
