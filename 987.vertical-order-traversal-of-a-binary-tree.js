/*
 * @lc app=leetcode id=987 lang=javascript
 *
 * [987] Vertical Order Traversal of a Binary Tree
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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
  let map = {};
  let traverse = (node, xLevel, yLevel) => {
    if (!node) return;

    xLevel = xLevel || 0;
    yLevel = yLevel || 0;

    if (!map[xLevel]) {
      map[xLevel] = {};
    }

    if (!map[xLevel][yLevel]) {
      map[xLevel][yLevel] = [];
    }

    map[xLevel][yLevel].push(node.val);

    if (node.left) {
      traverse(node.left, xLevel - 1, yLevel - 1);
    }

    if (node.right) {
      traverse(node.right, xLevel + 1, yLevel - 1);
    }
  };

  traverse(root);

  console.log(map)
  return Object.keys(map)
    .sort((a, b) => a - b)
    .map(xLevel =>
      Object.keys(map[xLevel])
        .sort((a, b) => b - a)
        .reduce(
          (acc, curr) => acc.concat(map[xLevel][curr].sort((a, b) => a - b)),
          []
        )
    );
};
