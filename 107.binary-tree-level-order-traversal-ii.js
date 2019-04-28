/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let queue = [root];
  let ret = [];

  if (!root) return ret;

  while (queue.length !== 0) {
    let len = queue.length;
    let sub = [];

    for (let i = 0; i < len; i++) {
      let temp = queue.shift();
      sub.push(temp.val);

      if (temp.left) {
        queue.push(temp.left);
      }

      if (temp.right) {
        queue.push(temp.right);
      }
    }

    ret.unshift(sub);
  }

  return ret;
};
