/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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
var sortList = function(head) {
  let ret = new ListNode(0);
  let pre = ret;
  let cur = head;
  let next = null;

  while (cur != null) {
    next = cur.next;
    while (pre.next != null && pre.next.val < cur.val) {
      pre = pre.next;
    }

    cur.next = pre.next;
    pre.next = cur;
    pre = ret;
    cur = next;
  }

  return ret.next;
};
