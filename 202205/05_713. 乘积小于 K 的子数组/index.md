# 713. 乘积小于 K 的子数组

给你一个整数数组 nums 和一个整数 k ，请你返回子数组内所有元素的乘积严格小于 k 的连续子数组的数目。

滑动窗口法

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let left = 0;
  let res = 0;
  let len = nums.length;
  let prod = 1;
  for (let i = 0; i < len; i++) {
    prod *= nums[i];
    while (left <= i && prod >= k) {
      prod /= nums[left];
      left++;
    }
    res += i - left + 1;
  }
  return res;
};
```
