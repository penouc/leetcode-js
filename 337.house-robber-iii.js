/*
 * @lc app=leetcode id=337 lang=javascript
 *
 * [337] House Robber III
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
 * @return {number}
 */
var rob = function(root) {
  if (!root) {
    return 0;
  }
  let val = 0;

  if (root.left) {
    val += rob(root.left.left) + rob(root.left.right);
  }

  if (root.right) {
    val += rob(root.right.left) + rob(root.right.right);
  }

  return Math.max(root.val + val, rob(root.left) + rob(root.right));
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
  return robSub(root, new Map());
};

function robSub(node, hash) {
  if (node === null) return 0;
  if (hash.has(node)) return hash.get(node);

  let val = 0;

  if (node.left) {
    val += robSub(node.left.left, hash) + robSub(node.left.right, hash);
  }

  if (node.right) {
    val += robSub(node.right.left, hash) + robSub(node.right.right, hash);
  }

  val = Math.max(
    node.val + val,
    robSub(node.left, hash) + robSub(node.right, hash)
  );
  hash.set(node, val);

  return val;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
  let res = robSub(root);
  return Math.max(res[0], res[1]);
};

function robSub(node) {
  if (node === null) return [0, 0];

  let left = robSub(node.left);
  let right = robSub(node.right);
  let res = [0, 0];

  res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  res[1] = node.val + left[0] + right[0];

  return res;
}
