/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function helper(list, ret) {
  if (list.length === 0) return;

  let nextArr = [];
  let nextVal = [];
  for (let i = 0; i < list.length; i++) {
    let temp = list[i];
    if (temp.left) {
      nextArr.push(temp.left);
      nextVal.push(temp.left.val);
    }
    if (temp.right) {
      nextArr.push(temp.right);
      nextVal.push(temp.right.val);
    }
  }
  if (nextVal.length !== 0) {
    ret.push(nextVal);
  }
  helper(nextArr, ret);
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let ret = [];
  if (!root) return ret;

  ret.push([root.val]);
  helper([root], ret);
  return ret;
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let ret = [];
  let queue = [root];
  if (!root) return ret;

  while (queue.length !== 0) {
    let len = queue.length;
    let sub = [];

    for (let i = 0; i < len; i++) {
      let temp = queue.shift();
      sub.push(temp.val);
      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
    }

    ret.push(sub);
  }

  return ret;
};
