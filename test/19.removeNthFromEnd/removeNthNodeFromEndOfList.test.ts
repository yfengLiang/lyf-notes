import { describe, expect, test } from "vitest";
import {
  removeNthFromEnd,
  removeNthFromEnd2,
  removeNthFromEnd3,
  toArray,
} from "./removeNthNodeFromEndOfList";

describe("删除链表的倒数第 N 个结点", () => {
  test("[1,2,3,4,5]", () => {
    const arr = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5,
              next: null,
            },
          },
        },
      },
    };
    const list = toArray(arr);
    expect(list).toEqual([1, 2, 3, 4, 5]);
  });
  test("[1,2,3,4,5]", () => {
    const arr = removeNthFromEnd([1, 2, 3, 4, 5], 2);
    expect(arr).toEqual([1, 2, 3, 5]);
  });
  test("[1,2,3,4,5]", () => {
    const arr = removeNthFromEnd2(
      {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 4,
              next: {
                val: 5,
                next: null,
              },
            },
          },
        },
      },
      2
    );
    expect(arr).toEqual({
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 5,
            next: null,
          },
        },
      },
    });
  });
  test("[1,2,3,4,5]", () => {
    const arr = removeNthFromEnd3(
      {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 4,
              next: {
                val: 5,
                next: null,
              },
            },
          },
        },
      },
      2
    );
    console.log(arr);

    expect(arr).toEqual({
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 5,
            next: null,
          },
        },
      },
    });
  });
});
