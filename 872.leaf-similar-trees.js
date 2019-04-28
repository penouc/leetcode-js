/*
 * @lc app=leetcode id=872 lang=javascript
 *
 * [872] Leaf-Similar Trees
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function dfs(tree, ret) {
  if (tree) {
    if (!tree.left && !tree.right) {
      ret.push(tree.val);
    }
    dfs(tree.left, ret);
    dfs(tree.right, ret);
  }
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  let ret1 = [];
  let ret2 = [];
  dfs(root1, ret1);
  dfs(root2, ret2);

  for (let i = 0; i < ret1.length; i++) {
    if (ret1[i] !== ret2[i]) {
      return false;
    }
  }

  return true;
};

function dfs(stack) {
  while (true) {
    let node = stack.pop();

    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
    if (!node.left && !node.right) {
      return node.val;
    }
  }
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  let s1 = [root1];
  let s2 = [root2];

  while (s1.length !== 0 && s2.length !== 0) {
    if (dfs(s1) !== dfs(s2)) {
      return false;
    }
  }

  return s1.length === 0 && s2.length === 0;
};
