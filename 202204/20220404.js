/**
 * 307. 区域和检索 - 数组可修改
 * 
 * 给你一个数组 nums ，请你完成两类查询。

  其中一类查询要求 更新 数组 nums 下标对应的值
  另一类查询要求返回数组 nums 中索引 left 和索引 right 之间（ 包含 ）的nums元素的 和 ，其中 left <= right
  实现 NumArray 类：

  NumArray(int[] nums) 用整数数组 nums 初始化对象
  void update(int index, int val) 将 nums[index] 的值 更新 为 val
  int sumRange(int left, int right) 返回数组 nums 中索引 left 和索引 right 之间（ 包含 ）的nums元素的 和 （即，nums[left] + nums[left + 1], ..., nums[right]）

  示例：

  输入：
  ["NumArray", "sumRange", "update", "sumRange"]
  [[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
  输出：
  [null, 9, null, 8]

  解释：
  NumArray numArray = new NumArray([1, 3, 5]);
  numArray.sumRange(0, 2); // 返回 1 + 3 + 5 = 9
  numArray.update(1, 2);   // nums = [1,2,5]
  numArray.sumRange(0, 2); // 返回 1 + 2 + 5 = 8

 */

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.arr = nums;
  this.len = nums.length;
  this.prefixSumArr = new Array(this.len + 1).fill(0);
  for (let i = 1; i <= this.len; i++) {
    this.prefixSumArr[i] = this.prefixSumArr[i - 1] + nums[i - 1];
  }
  return null;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  const temp = val - this.arr[index];
  this.arr[index] = val;
  for (let i = index + 1; i <= this.len; i++) {
    this.prefixSumArr[i] += temp;
  }

  return null;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.prefixSumArr[right + 1] - this.prefixSumArr[left];
  return sum;
};
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
