/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let maxLongPath = 0;

function maxLong(node) {
  if (!node) return 0;
  let leftDepth = maxLong(node.left);
  let rightDepth = maxLong(node.right);
  maxLongPath = Math.max(maxLongPath, leftDepth + rightDepth);
  return Math.max(leftDepth, rightDepth) + 1;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  maxLongPath = 0;
  maxLong(root);

  return maxLongPath;
};
