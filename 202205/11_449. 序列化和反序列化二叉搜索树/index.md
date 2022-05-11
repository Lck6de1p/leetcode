# 449. 序列化和反序列化二叉搜索树

序列化是将数据结构或对象转换为一系列位的过程，以便它可以存储在文件或内存缓冲区中，或通过网络连接链路传输，以便稍后在同一个或另一个计算机环境中重建。

设计一个算法来序列化和反序列化 二叉搜索树 。 对序列化/反序列化算法的工作方式没有限制。 您只需确保二叉搜索树可以序列化为字符串，并且可以将该字符串反序列化为最初的二叉搜索树。

编码的字符串应尽可能紧凑。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const list = [];

  const helper = (root, list) => {
    if (root) {
      helper(root.left, list);
      helper(root.right, list);
      list.push(root.val);
    }
  };

  helper(root, list);
  return list.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data.length === 0) return null;
  const list = data.split(",").map((v) => +v);
  const helper = (low, high, stack) => {
    if (
      stack.length === 0 ||
      stack[stack.length - 1] < low ||
      stack[stack.length - 1] > high
    ) {
      return null;
    }
    const val = stack.pop();
    const root = new TreeNode(val);
    root.right = helper(val, high, stack);
    root.left = helper(low, val, stack);
    return root;
  };

  return helper(-Infinity, Infinity, list);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
```
