/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function helper(tree, arr, stored) {
  if (!tree) return;
  stored += tree.val;
  if (!tree.left && !tree.right) {
    arr.push(stored);
  }

  helper(tree.left, arr, stored);
  helper(tree.right, arr, stored);
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  let arr = [];
  helper(root, arr, 0);

  return arr.includes(sum);
};

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) return false;

  if (!root.left && !root.right && root.val - sum === 0) {
    return true;
  }

  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
};
