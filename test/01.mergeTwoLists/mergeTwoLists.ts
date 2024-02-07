/**
 * 21. 合并两个有序链表
简单
相关标签
相关企业
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
export function mergeTwoLists(list1, list2) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  const retList = new ListNode();
  let new_p = retList;
  let l1 = list1;
  let l2 = list2;
  while (l1?.val && l2?.val) {
    if (l1.val < l2.val) {
      new_p.next = l1;
      l1 = l1.next;
    } else {
      new_p.next = l2;
      l2 = l2.next;
    }
    new_p = new_p.next;
  }
  new_p.next = l1?.val ? l1 : l2;
  return retList.next;
}

// Definition for singly-linked list.
export function ListNode(val?: number, next?: Function) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
