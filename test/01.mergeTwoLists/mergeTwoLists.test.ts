import { test } from "vitest";
import { mergeTwoLists, ListNode } from "./mergeTwoLists"; // 请替换为你的文件路径

test("合并两个有序链表", ({ expect }) => {
  const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
  expect(mergeTwoLists(l1, l2)).toEqual(
    new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))
      )
    )
  );
});

test("空链表合并正确", ({ expect }) => {
  const l1 = new ListNode();
  const l2 = new ListNode();
  expect(mergeTwoLists(l1, l2)).toEqual(new ListNode());
});

test("空链表与非空链表合并正确", ({ expect }) => {
  const l1 = new ListNode();
  const l2 = new ListNode(0);
  expect(mergeTwoLists(l1, l2)).toEqual(new ListNode(0));
});
