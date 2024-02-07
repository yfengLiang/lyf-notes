/**
  https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/
  26. 删除有序数组中的重复项

  给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。

  考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：

  更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums 的大小不重要。
  返回 k 。
  判题标准:

  系统会用下面的代码来测试你的题解:

  int[] nums = [...]; // 输入数组
  int[] expectedNums = [...]; // 长度正确的期望答案

  int k = removeDuplicates(nums); // 调用

  assert k == expectedNums.length;
  for (int i = 0; i < k; i++) {
      assert nums[i] == expectedNums[i];
  }
  如果所有断言都通过，那么您的题解将被 通过。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
export function removeDuplicates(nums: number[]) {
  const arr: number[] = [];
  for (let i = 0; i < nums.length; ) {
    if (arr.includes(nums[i])) {
      nums.splice(i, 1);
    } else {
      arr.push(nums[i]);
      i++;
    }
  }
  return arr.length;
}

export function removeDuplicates2(nums: number[]) {
  const arr: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (!arr.includes(nums[i])) {
      arr.push(nums[i]);
    }
  }

  // 将去重后的数组元素复制回原数组
  nums.length = 0;
  for (let num of arr) {
    nums.push(num);
  }
  return nums.length;
}

export function removeDuplicates3(nums: number[]) {
  const dict: Record<string, number> = {};
  const len = nums.length;
  for (let i = 1; i < len; i++) {
    const num = nums[i];
    if (!(num in dict)) {
      dict[num] = num;
    }
  }

  // 将去重后的数组元素复制回原数组
  nums.length = 0;
  for (let num of Object.values(dict)) {
    nums.push(num);
  }
  return nums.length;
}
