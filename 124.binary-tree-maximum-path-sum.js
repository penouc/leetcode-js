/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function maxDownTree(tree) {
  if (!tree) return 0;
  let left = Math.max(0, maxDownTree(tree.left));
  let right = Math.max(0, maxDownTree(tree.right));
  maxValue = Math.max(maxValue, left + right + tree.val);
  return Math.max(left, right) + tree.val;
}

let maxValue = 0;
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  maxValue = -Infinity;
  maxDownTree(root);
  console.log(maxValue);
  return maxValue;
};

function maxDownTree(node, arr) {
  if (!node) return 0;
  let left = Math.max(0, maxDownTree(node.left, arr));
  let right = Math.max(0, maxDownTree(node.right, arr));
  arr.push(left + right + node.val);

  return Math.max(left, right) + node.val;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  let arr = [];
  maxDownTree(root, arr);
  return Math.max(...arr);
};
