/*
 * @lc app=leetcode id=99 lang=javascript
 *
 * [99] Recover Binary Search Tree
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let ori = root;
  let stack = [];
  let pre = new TreeNode(Number.NEGATIVE_INFINITY);
  let arr = [];

  while (stack.length > 0 || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();

    if (!arr[0] && root && pre.val > root.val) {
      arr[0] = pre;
    }

    if (arr[0] && root && pre.val > root.val) {
      arr[1] = root;
    }

    pre = root;
    root = root.right;
  }

  if (!arr[1]) {
    arr[1] = pre;
  }

  let temp = arr[0].val;
  arr[0].val = arr[1].val;
  arr[1].val = temp;

  return ori;
};
