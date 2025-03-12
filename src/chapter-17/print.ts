import { ListNode } from './list-node';

export const printList = (head: ListNode | null) => {
  const result: number[] = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }

  console.log(result);
};
