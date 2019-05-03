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

function helper(tree, sum, sub, ret) {
  if (!tree) return;

  sub.push(tree.val);
  if (!tree.left && !tree.right && sum === tree.val) {
    ret.push(sub.slice(0));
    sub.pop();
    return;
  } else {
    helper(tree.left, sum - tree.val, sub, ret);
    helper(tree.right, sum - tree.val, sub, ret);
  }
  sub.pop();
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let ret = [];
  let sub = [];
  helper(root, sum, sub, ret);

  return ret;
};
