/*
 * @lc app=leetcode id=450 lang=javascript
 *
 * [450] Delete Node in a BST
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (root === null) {
    return null;
  }
  if (root.val === key) {
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;
    let next = root.right;
    while (next.left) {
      next = next.left;
    }

    next.left = root.left;
    return root.right;
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  }

  return root;
};
