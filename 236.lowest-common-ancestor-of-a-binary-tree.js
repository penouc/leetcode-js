/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
let retnode = null;

function recurseTree(node, p, q) {
  if (!node) return false;

  let left = recurseTree(node.left, p, q) ? 1 : 0;
  let right = recurseTree(node.right, p, q) ? 1 : 0;
  let mid = node === p || node === q ? 1 : 0;

  if (mid + left + right >= 2) {
    retnode = node;
  }
  return mid + right + left > 0;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  recurseTree(root, p, q);

  return retnode;
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let stack = [];
  let parent = new Map();

  parent.set(root, null);
  stack.push(root);

  while (!parent.has(p) || !parent.has(q)) {
    let node = stack.pop();

    if (node.left) {
      parent.set(node.left, node);
      stack.push(node.left);
    }

    if (node.right) {
      parent.set(node.right, node);
      stack.push(node.right);
    }
  }

  let ancestors = [];
  while (p) {
    ancestors.push(p);
    p = parent.get(p);
  }

  while (!ancestors.includes(q)) {
    q = parent.get(q);
  }

  return q;
};
