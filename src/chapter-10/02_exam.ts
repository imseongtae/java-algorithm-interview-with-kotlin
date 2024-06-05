import { ListNode, createLinkedList, linkedListToArray } from './list-node';

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const arrayList: number[] = [];

  for (let node of lists) {
    while (node) {
      arrayList.push(node.val);
      node = node.next;
    }
  }

  // Step 2: 배열 정렬
  arrayList.sort((a, b) => a - b);

  // Step 3: 배열을 바탕으로 새로운 링크드 리스트 만들기
  const temp = new ListNode(0);
  let current = temp;
  for (const value of arrayList) {
    current.next = new ListNode(value);
    current = current.next;
  }

  return temp.next;
}

// Test cases
// const testCases: Array<Array<number[]>> = [
//   [
//     [1, 4, 5],
//     [1, 3, 4],
//     [2, 6],
//   ], // Example test case
//   [[], [], []], // Empty lists
//   [[1], [0]], // Single element lists
//   [[], [1, 3, 4], []], // Some lists are empty
//   [
//     [1, 2, 2],
//     [1, 1, 2],
//     [2, 3, 3],
//   ], // Lists with duplicate elements
// ];

// testCases.forEach((testCase, index) => {
//   const lists = testCase.map((arr) => createLinkedList(arr));
//   const result = mergeKLists(lists);
//   console.log(`Test Case ${index + 1}:`, linkedListToArray(result));
// });

const testCase: Array<number[]> = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
]; // Example test case

const lists = testCase.map((arr) => createLinkedList(arr));
const result = mergeKLists(lists);

console.log('Test Case:', linkedListToArray(result));
