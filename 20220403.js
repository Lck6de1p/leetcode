/**
 * 给你一个排序后的字符列表 letters ，列表中只包含小写英文字母。另给出一个目标字母 target，请你寻找在这一有序列表里比目标字母大的最小字母。
 * 
 * 输入: letters = ["c", "f", "j"]，target = "a"
   输出: "c"
 */


   /**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  const length = letters.length;
  if (target >= letters[length - 1]) {
      return letters[0];
  }
  let low = 0, high = length - 1;
  while (low < high) {
      const mid = Math.floor((high - low) / 2) + low;
      if (letters[mid] > target) {
          high = mid;
      } else {
          low = mid + 1;
      }
  }
  return letters[low];
};