/*
 * @lc app=leetcode id=968 lang=javascript
 *
 * [968] Binary Tree Cameras
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let res = 0;
function dfs(node) {
  if (!node) return 2;

  let left = dfs(node.left);
  let right = dfs(node.right);

  if (left === 0 || right === 0) {
    res++;
    return 1;
  }

  return left === 1 || right === 1 ? 2 : 0;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minCameraCover = function(root) {
  res = 0;
  return (dfs(root) < 1 ? 1 : 0) + res;
};
