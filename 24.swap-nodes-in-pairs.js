/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
var swapPairs = function(head) {
  let ret = new ListNode(0);
  let flag = 0;
  let pre = head;
  let temp = ret;

  while (head) {
    if (flag === 0) {
      flag++;
      head = head.next;
    } else {
      temp.next = new ListNode(head.val);
      temp = temp.next;
      temp.next = new ListNode(pre.val);
      temp = temp.next;
      pre = head.next;
      head = head.next;
      flag--;
    }
  }
  if (pre && (pre.val || pre.val === 0)) {
    temp.next = new ListNode(pre.val);
  }

  return ret.next;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let n = head.next;
  head.next = swapPairs(head.next.next);
  n.next = head;
  return n;
};
