/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
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
var detectCycle = function(head) {
  let has = new Set();
  while (head !== null) {
    if (has.has(head)) {
      return head;
    } else {
      has.add(head);
    }
    head = head.next;
  }

  return null;
};
