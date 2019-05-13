/*
 * @lc app=leetcode id=701 lang=javascript
 *
 * [701] Insert into a Binary Search Tree
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    let ori = root;
    let pre = root;

    while(root !== null){
        pre = root;
        if(val > root.val) {
            root = root.right
        }else if(val < root.val) {
            root = root.left
        }
    }

    if(val > pre.val) {
        pre.right = new TreeNode(val)
    }else if(val < pre.val) {
        pre.left = new TreeNode(val)
    }

    return ori
};
