/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let ret = new ListNode(0);
  let temp = ret;

  while (l1 || l2) {
    if (!l1 && l2) {
      temp.next = l2;
      break;
    }

    if (!l2 && l1) {
      temp.next = l1;
      break;
    }

    if (l1.val < l2.val) {
      temp.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      temp.next = new ListNode(l2.val);
      l2 = l2.next;
    }

    temp = temp.next;
  }

  return ret.next;
};
