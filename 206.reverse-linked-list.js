/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let stack = [];
  let ret = new ListNode(0);
  let temp = ret;

  while (head) {
    stack.push(head.val);
    head = head.next;
  }

  while (stack.length > 0) {
    temp.next = new ListNode(stack.pop());
    temp = temp.next;
  }

  return ret.next;
};
