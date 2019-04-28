/*
 * @lc app=leetcode id=965 lang=javascript
 *
 * [965] Univalued Binary Tree
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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    if(!root) return true;

    if(root.left){
        if(root.left.val !== root.val) {
            return false
        }
    }

    if(root.right){
        if(root.right.val !== root.val) {
            return false
        }
    }

    return isUnivalTree(root.left) && isUnivalTree(root.right)
};

