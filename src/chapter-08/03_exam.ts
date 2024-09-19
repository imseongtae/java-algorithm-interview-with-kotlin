// 21 - Merge Two Sorted Lists
import { ListNode } from './list-node';

// 배열을 입력받아 연결 리스트를 생성하는 함수
function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

// 연결 리스트를 출력하는 함수
function printLinkedList(head: ListNode | null): void {
  let current = head;
  while (current !== null) {
    process.stdout.write(current.val + ' -> ');
    current = current.next;
  }
  console.log('null');
}

// 연결 리스트를 역순으로 뒤집는 함수
function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;

  while (current !== null) {
    const next: ListNode | null = current.next; // 다음 노드를 임시로 저장
    current.next = prev; // 현재 노드의 다음 노드를 이전 노드로 변경
    prev = current; // 이전 노드를 현재 노드로 업데이트
    current = next; // 현재 노드를 다음 노드로 업데이트
  }

  return prev;
}

// 연결 리스트 생성 및 출력
const arr = [1, 2, 3, 4, 5];
const head = createLinkedList(arr);
console.log('Original list:');
printLinkedList(head);

// 연결 리스트 뒤집기
const reversedHead = reverseList(head);
console.log('Reversed list:');
printLinkedList(reversedHead);
