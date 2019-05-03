/*
 * @lc app=leetcode id=508 lang=javascript
 *
 * [508] Most Frequent Subtree Sum
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function nodeSum(node, hash) {
  if (!node) {
    return 0;
  }

  let leftSum = nodeSum(node.left, hash);
  //   arr.push(leftSum);
  let rightSum = nodeSum(node.right, hash);
  //   arr.push(rightSum);
  let sum = node.val + leftSum + rightSum;
  if (!hash[sum]) {
    hash[sum] = 1;
  } else {
    hash[sum]++;
  }

  return sum;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  let hash = {};
  let ret = [];
  nodeSum(root, hash);
  let arr = Object.keys(hash);
  let max = 0;
  console.log(hash, arr);
  let t = arr.pop();

  while (t) {
    let temp = max;
    max = Math.max(max, hash[t]);
    if (max === hash[t]) {
      if (temp !== max) {
        ret = [t];
      } else {
        ret.push(t);
      }
    }
    t = arr.pop();
  }

  return ret;
};

let maxCount = 0;

function nodeSum(node, hash) {
  if (!node) {
    return 0;
  }

  let leftSum = nodeSum(node.left, hash);
  let rightSum = nodeSum(node.right, hash);
  let sum = node.val + leftSum + rightSum;

  if (!hash[sum]) {
    hash[sum] = 1;
  } else {
    hash[sum]++;
  }
  console.log(maxCount, hash[sum]);
  maxCount = Math.max(maxCount, hash[sum]);

  return sum;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  let hash = {};
  maxCount = 0;
  nodeSum(root, hash);

  return Object.keys(hash).filter(val => hash[val] >= maxCount);
};
