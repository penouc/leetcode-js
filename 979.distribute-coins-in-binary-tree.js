/*
 * @lc app=leetcode id=979 lang=javascript
 *
 * [979] Distribute Coins in Binary Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
let ans = 0;

function dfs(node) {
  if (!node) return 0;
  let L = dfs(node.left);
  let R = dfs(node.right);
  ans += Math.abs(L) + Math.abs(R);

  return node.val + L + R - 1;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function(root) {
  ans = 0;
  if (!root) return null;
  dfs(root);

  return ans;
};
