# 剑指 Offer 22. 链表中倒数第 k 个节点

输入一个链表，输出该链表中倒数第 k 个节点。为了符合大多数人的习惯，本题从 1 开始计数，即链表的尾节点是倒数第 1 个节点。

例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

## 解题思路

双指针，让指针`first`指针 先走k步，然后`later`指针和`first`同步走，当`first`到头了，`later`就是所求值

```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  let later = head,
    first = head;

  for (let i = 0; i < k; i++) {
    first = first.next;
  }
  while (first) {
    first = first.next;
    later = later.next;
  }
  return later;
}
```
