/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @description recursion 回溯算法
 * @param {*} tree
 * @param {*} res
 */
function helper(tree, res) {
  if (tree !== null) {
    if (tree.left) {
      helper(tree.left, res);
    }
    res.push(tree.val);
    if (tree.right) {
      helper(tree.right, res);
    }
  }
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let res = [];
  helper(root, res);
  return res;
};

/**
 * @description use stack
 * @param {*} root
 */

var inorderTraversal = function(root) {
  let res = [];
  let stack = [];
  let curr = root;

  while (curr !== null || stack.length !== 0) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    res.push(curr.val);
    curr = curr.right;
  }

  return res;
};

/**
 * @description morris Travessal
 */

var inorderTraversal = function(root) {
  let res = [];
  let curr = root;
  let pre = null;

  while (curr !== null) {
    if (curr.left === null) {
      res.push(curr.val);
      curr = curr.right;
    } else {
      pre = curr.left;
      while (pre.right) {
        pre = pre.right;
      }
      pre.right = curr;
      temp = curr;
      curr = curr.left;
      temp.left = null;
    }
  }

  return res;
};
