/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function helper(node, arr, stored) {
  if (!node) return "";
  stored += node.val + "->";
  if (!node.left && !node.right) {
    arr.push(stored.slice(0, -2));
  }

  helper(node.left, arr, stored);
  helper(node.right, arr, stored);
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let arr = [];
  helper(root, arr, "");

  return arr;
};
