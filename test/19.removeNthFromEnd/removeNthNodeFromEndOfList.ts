/**
19. 删除链表的倒数第 N 个结点
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
示例 1：
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
示例 2：

输入：head = [1], n = 1
输出：[]
示例 3：

输入：head = [1,2], n = 1
输出：[1]

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function toArray(head: ListNode | null): number[] {
  const nodes: number[] = [];
  let currentNode = head;
  while (currentNode) {
    nodes.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return nodes;
}

export function removeNthFromEnd(nodes: number[], n: number) {
  let num = nodes.length - n;
  nodes.splice(num, 1);
  return nodes;
}

export function removeNthFromEnd2(head: ListNode | null, n: number) {
  const nodes: ListNode[] = [];
  let currentNode = head;
  while (currentNode) {
    nodes.push(currentNode);
    currentNode = currentNode.next;
  }
  let num = nodes.length - n;
  nodes.splice(num, 1);

  if (nodes.length === 0) return null;

  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }

  nodes[nodes.length - 1].next = null;

  return nodes[0];
}

export function removeNthFromEnd3(head: ListNode | null, n: number) {
  let dummy: ListNode | null = new ListNode(0, head);
  let fast: ListNode | null = dummy;
  let slow: ListNode | null = dummy;
  for (let i = 0; i <= n; i++) {
    if (fast) {
      fast = fast.next;
    }
  }
  while (fast !== null) {
    if (slow) {
      fast = fast.next;
      slow = slow.next;
    }
  }
  if (slow && slow.next) {
    slow.next = slow.next.next;
  }
  return dummy.next;
}
