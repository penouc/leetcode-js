/*
 * @lc app=leetcode id=449 lang=javascript
 *
 * [449] Serialize and Deserialize BST
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function buildString(node, arr) {
  if (node === null) {
    arr.push(null);
  } else {
    arr.push(node.val);
    buildString(node.left, arr);
    buildString(node.right, arr);
  }
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let arr = [];
  buildString(root, arr);

  return JSON.stringify(arr);
};

function buildTree(arr) {
  let val = arr.shift();

  if (val === null) {
    return null;
  } else {
    let node = new TreeNode(val);
    node.left = buildTree(arr);
    node.right = buildTree(arr);

    return node;
  }
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let arr = JSON.parse(data);

  return buildTree(arr);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// 直接照搬源来的解法

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let ret = [];
  let stack = [root];

  while (stack.length) {
    let node = stack.pop();

    ret.push(node === null ? null : node.val);
    if (!node) {
      continue;
    }

    if (node.left) {
      stack.unshift(node.left);
    } else if (node.left === null) {
      stack.unshift(null);
    }

    if (node.right) {
      stack.unshift(node.right);
    } else if (node.right === null) {
      stack.unshift(null);
    }
  }

  while (ret[ret.length - 1] === null) {
    ret.pop();
  }

  return JSON.stringify(ret);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let arr = JSON.parse(data);
  if (!arr.length) return null;
  let root = new TreeNode(arr[0]);
  let len = arr.length;

  let q = [root];

  for (let i = 1; i < len; i++) {
    let parent = q.shift();
    if (!parent) {
      break;
    }

    if (arr[i] || arr[i] === 0) {
      let node = new TreeNode(arr[i]);
      parent.left = node;
      q.push(node);
    }

    if (arr[++i] || arr[i] === 0) {
      let node = new TreeNode(arr[i]);
      parent.right = node;
      q.push(node);
    }
  }

  return root;
};
