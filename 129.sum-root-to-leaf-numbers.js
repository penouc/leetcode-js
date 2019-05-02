/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function helper(node, arr, stored) {
  if (!node) return 0;
  stored = stored * 10 + node.val;
  if (!node.left && !node.right) {
    arr.push(stored);
  }

  helper(node.left, arr, stored);
  helper(node.right, arr, stored);
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  let arr = [];
  helper(root, arr, 0);

  return arr.reduce((prev, val) => prev + val, 0);
};
