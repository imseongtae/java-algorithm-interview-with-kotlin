/**
 * Definition for singly-linked list.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 링크드 리스트를 만드는 헬퍼 함수
 */
export function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

/**
 * 링크드 리스트를 배열로 변환하는 헬퍼 함수
 */
export function linkedListToArray(head: ListNode | null): number[] {
  const array: number[] = [];
  while (head) {
    array.push(head.val);
    head = head.next;
  }
  return array;
}
