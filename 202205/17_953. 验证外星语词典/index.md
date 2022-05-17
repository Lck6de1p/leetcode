# 953. 验证外星语词典

某种外星语也使用英文小写字母，但可能顺序 order 不同。字母表的顺序（order）是一些小写字母的排列。

给定一组用外星语书写的单词 words，以及其字母表的顺序 order，只有当给定的单词在这种外星语中按字典序排列时，返回 true；否则，返回 false。

示例 1：

输入：words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
输出：true
解释：在该语言的字母表中，'h' 位于 'l' 之前，所以单词序列是按字典序排列的。

```js
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const index = new Array(26).fill(0);
  for (let i = 0; i < order.length; ++i) {
    index[order[i].charCodeAt() - "a".charCodeAt()] = i;
  }
  for (let i = 1; i < words.length; i++) {
    let valid = false;
    for (let j = 0; j < words[i - 1].length && j < words[i].length; j++) {
      let prev = index[words[i - 1][j].charCodeAt() - "a".charCodeAt()];
      let curr = index[words[i][j].charCodeAt() - "a".charCodeAt()];
      if (prev < curr) {
        valid = true;
        break;
      } else if (prev > curr) {
        return false;
      }
    }
    if (!valid) {
      /* 比较两个字符串的长度 */
      if (words[i - 1].length > words[i].length) {
        return false;
      }
    }
  }
  return true;
};
```
