import { ListNode } from './list-node';
import { printList } from './print';

function insertionSortList(head: ListNode | null): ListNode | null {
  if (!head) return null; // 예외 처리: 빈 리스트라면 그대로 반환

  const parent: ListNode = new ListNode(0); // 정렬된 리스트의 시작점 (더미 노드)
  let p: ListNode = parent; // 정렬된 리스트를 탐색할 포인터

  while (head !== null) {
    // const pNext: ListNode | null = p.next; // 현재 p의 다음 노드 저장
    const headNext: ListNode | null = head.next; // 원래 리스트에서 head의 다음 노드 저장

    // 정렬된 리스트에서 적절한 위치 찾기
    while (p.next !== null && p.next.val < head.val) {
      p = p.next;
    }

    // head를 p.next 위치에 삽입
    head.next = p.next;
    p.next = head;

    // 다음 노드로 이동
    head = headNext;
    p = parent; // 포인터를 다시 맨 앞으로 이동 (비효율적인 부분)
  }

  return parent.next; // 정렬된 리스트 반환
}

// [4, 2, 1, 3]
// const nodeList = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3, null))));
// [-1,5,3,4,0]
const nodeList2 = new ListNode(
  -1,
  new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0, null)))),
);

const result = insertionSortList(nodeList2);
console.log('result:', result);
printList(result);
