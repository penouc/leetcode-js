/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function helper(tree, sum, ret, stored, sub) {
  if (!tree) return;
  stored += tree.val;
  sub += "#" + tree.val;

  if (!tree.left && !tree.right) {
    if (stored === sum) {
      ret.push(sub.slice(1).split("#"));
      sub = "";
    }
  }

  helper(tree.left, sum, ret, stored, sub);
  helper(tree.right, sum, ret, stored, sub);
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let ret = [];
  helper(root, sum, ret, 0, "");

  return ret;
};
