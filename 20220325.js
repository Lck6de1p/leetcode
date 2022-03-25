/**
 * 172. 阶乘后的零
 * 给定一个整数 n ，返回 n! 结果中尾随零的数量。
 * 提示 n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1
 * 
 */

// 记录5的个数，就是答案

/**
 * @param {number} n
 * @return {number}
 */
 var trailingZeroes = function (n) {
  if (n === 0) return 0;
  let countOf5 = 0;
  n = n - n % 5;
  while (n > 1) {
      let temp = n;
      while (temp % 5 === 0) {
          countOf5++;
          temp = temp / 5
      }
      n -= 5;
  }
  return countOf5;
};