/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function isSameTree(p, q) {
  if (!p && !q) return true;
  if ((!p && q) || (p && !q) || p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if ((!s && t) || (s && !t)) return false;

  if (s.val === t.val) {
    if (isSameTree(s, t)) {
      return true;
    }
  }

  return isSubtree(s.left, t) || isSubtree(s.right, t);
};
