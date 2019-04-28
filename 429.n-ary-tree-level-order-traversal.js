/*
 * @lc app=leetcode id=429 lang=javascript
 *
 * [429] N-ary Tree Level Order Traversal
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
function helper(list, ret) {
  if (list.length === 0) return;
  let nextArr = [];
  let sub = [];

  let len = list.length;
  for (let i = 0; i < len; i++) {
    let temp = list[i];
    sub.push(temp.val);
    nextArr = nextArr.concat(temp.children);
  }
  ret.push(sub);
  helper(nextArr, ret);
}

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let ret = [];
  if (!root) return ret;
  helper([root], ret);

  return ret;
};

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let ret = [];
  if (!root) return ret;
  helper([root], ret);

  return ret;
};

/**
 * @param {Node} root
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

      queue = queue.concat(temp.children);
    }
    ret.push(sub);
  }

  return ret;
};
