/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let stack = [];
  let order = null;
  let min = Number.POSITIVE_INFINITY;

  while (stack.length > 0 || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    if (order !== null) {
      min = Math.min(min, root.val - order);
    }
    order = root.val;
    root = root.right;
  }
  return min;
};
