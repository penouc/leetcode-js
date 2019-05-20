/*
 * @lc app=leetcode id=445 lang=javascript
 *
 * [445] Add Two Numbers II
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
var addTwoNumbers = function(l1, l2) {
  let ret = new ListNode(0);
  let stack1 = [];
  let stack2 = [];
  let retStack = [];

  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }
  let flag = 0;

  while (stack1.length > 0 || stack2.length > 0 || flag) {
    let v1 = stack1.pop() || 0;
    let v2 = stack2.pop() || 0;
    let val = flag + v1 + v2;
    if (val >= 10) {
      val = val % 10;
      flag = 1;
    } else {
      flag = 0;
    }
    retStack.push(val);
  }

  let tempParent = ret;
  while (retStack.length > 0) {
    tempParent.next = new ListNode(retStack.pop());
    tempParent = tempParent.next;
  }

  return ret.next;
};
