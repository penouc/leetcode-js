/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function helper(node, lower, upper) {
  if (node === null) {
    return true;
  }

  let val = node.val;
  if (lower != null && val <= lower) {
    return false;
  }

  if (upper != null && val >= upper) {
    return false;
  }

  if (!helper(node.left, lower, val)) {
    return false;
  }

  if (!helper(node.right, val, upper)) {
    return false;
  }

  return true;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  return helper(root, null, null);
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let stack = [];
  let inorder = Number.NEGATIVE_INFINITY;

  while (stack.length > 0 || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();

    if (root.val <= inorder) {
      return false;
    }
    inorder = root.val;
    root = root.right;
  }

  return true;
};
