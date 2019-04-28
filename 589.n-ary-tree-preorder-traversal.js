/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

function helper(tree, res) {
  if (!tree) return;
  res.push(tree.val);
  for (let i = 0; i < tree.children.length; i++) {
    helper(tree.children[i], res);
  }
}

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  let res = [];
  helper(root, res);
  return res;
};

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  if (!root) return [];
  let res = [];
  let stack = [root];

  while (stack.length !== 0) {
    let t = stack[0];
    stack.shift();
    res.push(t.val);

    for (let i = t.children.length - 1; i >= 0; i--) {
      stack.unshift(t.children[i]);
    }
  }

  return res;
};
