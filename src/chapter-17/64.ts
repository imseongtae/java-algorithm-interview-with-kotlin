import { ListNode } from './list-node';
import { printList } from './print';

/**
 * 병합 정렬을 수행하는 재귀 함수
 * @param head 정렬할 연결 리스트의 시작 노드
 * @returns 정렬된 연결 리스트의 시작 노드
 */
function mergeSort(head: ListNode | null): ListNode | null {
  // 기저 사례(Base Case): 노드가 하나 이하이면 정렬할 필요 없음
  if (!head || !head.next) return head;

  // 1. 연결 리스트를 절반으로 나누기 (Divide)
  const [left, right] = splitList(head);

  // 2. 나눠진 두 부분 리스트를 각각 정렬 (Conquer)
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // 3. 두 개의 정렬된 리스트를 병합 (Merge)
  return merge(sortedLeft, sortedRight);
}

/**
 * 연결 리스트를 중간에서 나누는 함수
 * @param head 연결 리스트의 시작 노드
 * @returns [첫 번째 리스트의 시작 노드, 두 번째 리스트의 시작 노드]
 */
function splitList(head: ListNode | null): [ListNode | null, ListNode | null] {
  if (!head || !head.next) return [head, null];

  let slow: ListNode | null = head; // 느린 포인터 (slow)
  let fast: ListNode | null = head; // 빠른 포인터 (fast)
  let prev: ListNode | null = null; // 중간을 자르기 위한 이전 노드

  // Runner 기법: fast 포인터가 두 칸씩 이동, slow는 한 칸씩 이동
  while (fast && fast.next) {
    prev = slow; // slow의 이전 노드를 저장
    slow = slow!.next; // slow 한 칸 이동
    fast = fast.next.next; // fast 두 칸 이동
  }

  // 리스트를 두 개로 나누기
  if (prev) prev.next = null;

  return [head, slow];
}

/**
 * 두 개의 정렬된 연결 리스트를 병합하는 함수 (Merge Step)
 * @param l1 첫 번째 정렬된 리스트의 시작 노드
 * @param l2 두 번째 정렬된 리스트의 시작 노드
 * @returns 병합된 정렬 리스트의 시작 노드
 */
function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0); // 결과 리스트의 가짜 시작점 (dummy 노드)
  let current = dummy; // 병합을 진행할 현재 노드

  // 두 리스트의 값을 비교하면서 작은 값부터 연결
  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1; // l1이 더 작으면 l1을 추가
      l1 = l1.next; // l1을 다음 노드로 이동
    } else {
      current.next = l2; // l2가 더 작으면 l2를 추가
      l2 = l2.next; // l2를 다음 노드로 이동
    }
    current = current.next; // 병합 리스트의 현재 노드를 이동
  }

  // 남은 노드를 붙여주기
  if (l1) current.next = l1;
  if (l2) current.next = l2;

  return dummy.next; // dummy 다음 노드가 실제 병합된 리스트의 시작점
}

/**
 * 연결 리스트를 정렬하는 메인 함수 (Merge Sort 기반)
 */
function sortList(head: ListNode | null): ListNode | null {
  return mergeSort(head);
}

const nodeList = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3, null))));
// sortList()
printList(sortList(nodeList));
