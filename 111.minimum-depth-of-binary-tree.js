/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null) 
    {
        return 0;
    }
    let L = minDepth(root.left);
    let R = minDepth(root.right);
    return (L == 0 || R == 0) ? (L+R+1) : Math.min(L,R) + 1;

};

