// 21 - Merge Two Sorted Lists
import { ListNode } from './list-node';

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummy = new ListNode();
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return dummy.next;
}

// Helper function to print a linked list
function printLinkedList(list: ListNode | null): void {
  let current = list;
  while (current !== null) {
    process.stdout.write(current.val + ' -> ');
    current = current.next;
  }
  console.log('null');
}

const mergedList = mergeTwoLists(
  new ListNode(1, new ListNode(2, new ListNode(5))),
  new ListNode(1, new ListNode(3, new ListNode(4))),
);

printLinkedList(mergedList);
