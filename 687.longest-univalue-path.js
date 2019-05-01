/*
 * @lc app=leetcode id=687 lang=javascript
 *
 * [687] Longest Univalue Path
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let maxLength = 0;

function maxL(node) {
  if (!node) return 0;
  let left = maxL(node.left);
  let right = maxL(node.right);
  let leftArrow = 0;
  let rightArrow = 0;
  if (node.left && node.left.val === node.val) {
    leftArrow += left + 1;
  }

  if (node.right && node.right.val === node.val) {
    rightArrow += right + 1;
  }

  maxLength = Math.max(maxLength, leftArrow + rightArrow);

  return Math.max(leftArrow, rightArrow);
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  maxLength = 0;
  maxL(root);

  return maxLength;
};
