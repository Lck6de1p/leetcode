# 433. 最小基因变化

基因序列可以表示为一条由 8 个字符组成的字符串，其中每个字符都是 'A'、'C'、'G' 和 'T' 之一。

假设我们需要调查从基因序列  start 变为 end 所发生的基因变化。一次基因变化就意味着这个基因序列中的一个字符发生了变化。

例如，"AACCGGTT" --> "AACCGGTA" 就是一次基因变化。
另有一个基因库 bank 记录了所有有效的基因变化，只有基因库中的基因才是有效的基因序列。

给你两个基因序列 start 和 end ，以及一个基因库 bank ，请你找出并返回能够使  start 变化为 end 所需的最少变化次数。如果无法完成此基因变化，返回 -1 。

注意：起始基因序列  start 默认是有效的，但是它并不一定会出现在基因库中。

```js
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  const cnt = new Set();
  const visited = new Set();

  for (const item of bank) {
    cnt.add(item);
  }
  if (start === end) {
    return 0;
  }
  if (!cnt.has(end)) {
    return -1;
  }

  const keys = ["A", "C", "G", "T"];
  const queue = [start];
  visited.add(start);
  let step = 1;
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const curr = queue.shift();
      for (let j = 0; j < 8; j++) {
        for (let k = 0; k < 4; k++) {
          if (keys[k] !== curr[j]) {
            const sb = [...curr];
            sb[j] = keys[k];
            const next = sb.join("");
            if (!visited.has(next) && cnt.has(next)) {
              if (next === end) {
                return step;
              }
              queue.push(next);
              visited.add(next);
            }
          }
        }
      }
    }
    step++;
  }
  return -1;
};
```
