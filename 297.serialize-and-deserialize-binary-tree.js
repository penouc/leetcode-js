/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

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

function helper(list, start, end, len, arr) {
  if (!list.length) return;
  let ret = [];
  //   console.log(list);
  //   console.log(start, end, len);
  for (let i = 0; i < list.length; i++) {
    const temp = list[i];
    // console.log(temp);
    // console.log(list, start, end, i, temp);
    if (end >= len) {
      return;
    } else {
      if (arr[end] === null) {
        temp.left = null;
      } else {
        let node = new TreeNode(arr[end]);
        temp.left = node;
        ret.push(node);
      }
    }
    end++;

    if (end >= len) {
      return;
    } else {
      if (arr[end] === null) {
        temp.right = null;
      } else {
        let node = new TreeNode(arr[end]);
        temp.right = node;
        ret.push(node);
      }
    }
    end++;

    start++;
  }

  //   console.log(ret);
  //   console.log(ret, start, end, len, arr);
  helper(ret, start, end, len, arr);
}

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

  helper([root], 0, 1, len, arr);

  return root;
};

///hhhhhh 我日他是用的自己的一套解析思路我日

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
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

var serialize = function(root) {
  let ret = [];
  buildString(root, ret);

  return JSON.stringify(ret);
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
