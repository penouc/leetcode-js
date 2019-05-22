/*
 * @lc app=leetcode id=147 lang=javascript
 *
 * [147] Insertion Sort List
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
var insertionSortList = function(head) {
  let ret = new ListNode(0);
  let pre = ret;
  let cur = head;
  let next = null;

  while (cur != null) {
    next = cur.next;
    //find the right place to insert
    while (pre.next != null && pre.next.val < cur.val) {
      pre = pre.next;
    }
    //insert between pre and pre.next
    cur.next = pre.next;
    pre.next = cur;
    pre = ret;
    cur = next;
  }

  return cur.next;
};
