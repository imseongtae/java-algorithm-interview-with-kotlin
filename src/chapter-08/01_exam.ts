// 234 - Palindrome Linked List
import { ListNode } from './list-node';

class LinkedList {
  head: ListNode | null;
  constructor() {
    this.head = null;
  }

  // 리스트 출력 메소드
  print() {
    let current = this.head;

    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  searchMiddleNode() {
    let slow: ListNode | null = this.head;
    let fast: ListNode | null = this.head;
    while (fast && fast.next) {
      slow = slow!.next;
      fast = fast.next.next;
    }
    return slow;
  }

  reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }

  isPalindrome(): boolean {
    if (!this.head || !this.head.next) {
      return true;
    }

    const middle = this.searchMiddleNode();
    const secondHalfStart = this.reverseList(middle);

    let firstHalfStart: ListNode | null = this.head;
    let secondHalfCheck = secondHalfStart;

    while (secondHalfCheck !== null) {
      if (firstHalfStart!.val !== secondHalfCheck.val) {
        return false;
      }

      firstHalfStart = firstHalfStart!.next;
      secondHalfCheck = secondHalfCheck.next;
    }

    return true;
  }
}

const list = new LinkedList();

list.head = new ListNode(1);
list.head.next = new ListNode(2);
list.head.next.next = new ListNode(3);
list.head.next.next.next = new ListNode(4);
list.head.next.next.next.next = new ListNode(3);
list.head.next.next.next.next.next = new ListNode(2);
list.head.next.next.next.next.next.next = new ListNode(1);

// 리스트 출력
list.print();

console.log('isPalindrome:', list.isPalindrome());
