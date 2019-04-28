/*
 * @lc app=leetcode id=590 lang=javascript
 *
 * [590] N-ary Tree Postorder Traversal
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

function helper(tree, ret) {
  if (tree !== null) {
    for (let i = 0; i < tree.children.length; i++) {
      helper(tree.children[i], ret);
    }
    ret.push(tree.val);
  }
}

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  let ret = [];
  helper(root, ret);

  return ret;
};


/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  if(!root) return [];
  let ret = [];
  let queue = [root];
  

  while(queue && queue.length > 0){
    let t = queue.shift();
    if (t == null) continue;

    ret.push(t.val);
    queue = t.children.reverse().concat(queue);
  }

  return ret.reverse();
};
