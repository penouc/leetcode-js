/*
 * @lc app=leetcode id=814 lang=javascript
 *
 * [814] Binary Tree Pruning
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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    if(!root) return null;
    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);
    if(root.left === null && root.right === null && root.val === 0){
        return null
    }

    return root
};

