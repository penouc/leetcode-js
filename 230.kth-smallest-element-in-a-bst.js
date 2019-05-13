/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let stack = [];

    while(stack.length > 0 || root !== null) {
        while(root != null) {
            stack.push(root);
            root = root.left;
        }

        root = stack.pop();
        k--;
        if(0 === k){
            return root.val;
        }
        root = root.right;
    }
};

