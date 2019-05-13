/*
 * @lc app=leetcode id=501 lang=javascript
 *
 * [501] Find Mode in Binary Search Tree
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
 * @return {number[]}
 */
var findMode = function(root) {
  let hash = {};
  let stack = [];
  let pre = new TreeNode(Number.NEGATIVE_INFINITY);

  while (stack.length > 0 || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    if (!hash[root.val]) {
      hash[root.val] = 1;
    }
    if (pre && root && pre.val === root.val) {
      hash[root.val] += 1;
    }
    // console.log(hash);
    pre = root;
    root = root.right;
  }
  let max = Math.max(...Object.values(hash));
  //   console.log(max, hash, Object.entries(hash).find(entry => entry[1] === max));
  return Object.entries(hash)
    .filter(entry => entry[1] === max)
    .map(entry => entry[0]);
};
