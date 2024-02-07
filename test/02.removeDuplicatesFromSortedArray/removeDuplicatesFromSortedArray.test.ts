import { test } from "vitest";
import {
  removeDuplicates,
  removeDuplicates2,
  removeDuplicates3,
} from "./removeDuplicatesFromSortedArray"; // 请替换为你的文件路径

test("数组去重, [1, 1, 2]", ({ expect }) => {
  const nums = [1, 1, 2];
  expect(removeDuplicates(nums)).toEqual(2);
  expect(nums).toEqual([1, 2]);
});

test("数组去重,[0,0,1,1,1,2,2,3,3,4]", ({ expect }) => {
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  expect(removeDuplicates(nums)).toEqual(5);
  expect(nums).toEqual([0, 1, 2, 3, 4]);
});

test("数组去重,[0,0,1,1,1,2,2,3,3,4]", ({ expect }) => {
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  expect(removeDuplicates2(nums)).toEqual(5);
  expect(nums).toEqual([0, 1, 2, 3, 4]);
});

test("removeDuplicates3,[0,0,1,1,1,2,2,3,3,4]", ({ expect }) => {
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const start = Date.now();
  const len = removeDuplicates3(nums);
  console.log("removeDuplicates3耗时", Date.now() - start);
  expect(len).toEqual(5);
  expect(nums).toEqual([0, 1, 2, 3, 4]);
});
