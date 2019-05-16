/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = [];

  function helper(startInx, sub) {
    if (sub.length === k) {
      res.push(sub.slice());
      return;
    }

    for (let i = startInx; i <= n; i++) {
      if (sub.length >= 1 && sub[sub.length - 1] >= i) continue;
      sub.push(i);
      helper(startInx + 1, sub);
      sub.pop();
    }
  }
  helper(1, []);
  return res;
};

var combine = function(n, k) {
  let res = [];

  function helper(startInx, sub) {
    if (sub.length === k) {
      res.push(sub.slice());
      return;
    }

    for (let i = startInx; i <= n; i++) {
      if (sub.length >= 1 && sub[sub.length - 1] >= i) continue;
      sub.push(i);
      helper(i + 1, sub);
      sub.pop();
    }
  }
  helper(1, []);
  return res;
};
