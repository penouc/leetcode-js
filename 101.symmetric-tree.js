/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function isSymmetricTree(p, q) {
    if(!p && !q) return true;
    if((p && !q) || (q && !p) || p.val !== q.val) {
      return false
    }
  
    return isSymmetricTree(p.left, q.right) && isSymmetricTree(q.left, p.right);
  }
  
  /**
   * @param {TreeNode} root
   * @return {boolean}
   */
  var isSymmetric = function(root) {
    if(!root) return true;
    
    return isSymmetricTree(root.left, root.right);
  };

