/**
 * 693. 交替位二进制数
 * 给定一个正整数，检查它的二进制表示是否总是 0、1 交替出现：换句话说，就是二进制表示中相邻两位的数字永不相同。
 * 
 * 
 */

/**
 * @param {number} n
 * @return {boolean}
 */
 var hasAlternatingBits = function(n) {
  let prev = 2;
  while (n !== 0) {
      const cur = n % 2;
      if (cur === prev) {
          return false;
      }
      prev = cur;
      n = Math.floor(n / 2);
  }
  return true;
};