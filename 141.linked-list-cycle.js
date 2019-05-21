/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */
var hasCycle = function(head) {
  let has = new Set();
  while (head !== null) {
    if (has.has(head)) {
      return true;
    } else {
      has.add(head);
    }
    head = head.next;
  }

  return false;
};
