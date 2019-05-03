/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let retnode = null;

function helper(node, p, q) {
  if (!node) return null;

  let left = helper(node.left, p, q) ? 1 : 0;
  let right = helper(node.right, p, q) ? 1 : 0;
  let mid = node === p || node === q ? 1 : 0;

  if (left + right + mid >= 2) {
    retnode = node;
  }

  return left + right + mid > 0;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  helper(root, p, q);

  return retnode;
};

/**
 * @def
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let nodeVal = root.val;

  let pVal = p.val;
  let qVal = q.val;

  if (pVal > nodeVal && qVal > nodeVal) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (pVal < nodeVal && qVal < nodeVal) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root;
  }
};

/**
 * @description
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let pVal = p.val;
  let qVal = q.val;

  let current = root;

  while (current) {
    let nodeVal = current.val;

    if (pVal > nodeVal && qVal > nodeVal) {
      current = current.right;
    } else if (pVal < nodeVal && qVal < nodeVal) {
      current = current.left;
    } else {
      return current;
    }
  }

  return null;
};
