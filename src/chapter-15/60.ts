import { MinHeap } from './MinHeap';

function findKthLargest(nums: number[], k: number): number {
  const minHeap = new MinHeap();

  for (const num of nums) {
    minHeap.insert(num); // 요소를 힙에 삽입

    if (minHeap.size() > k) {
      minHeap.extractMin();
    }
  }

  return minHeap.peek()!;
}

function runTests() {
  // 테스트 케이스 1: 기본적인 배열과 작은 k
  const nums1 = [3, 2, 1, 5, 6, 4];
  const k1 = 2;
  console.log(`Test Case 1: Expected 5, Got ${findKthLargest(nums1, k1)}`); // Expected output: 5

  // 테스트 케이스 2: 배열에 중복 값이 있는 경우
  const nums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
  const k2 = 4;
  console.log(`Test Case 2: Expected 4, Got ${findKthLargest(nums2, k2)}`); // Expected output: 4

  // 테스트 케이스 3: 배열의 모든 요소가 같은 값
  const nums3 = [1, 1, 1, 1];
  const k3 = 1;
  console.log(`Test Case 3: Expected 1, Got ${findKthLargest(nums3, k3)}`); // Expected output: 1

  // 테스트 케이스 4: k가 배열의 길이와 같은 경우
  const nums4 = [7, 10, 4, 3, 20, 15];
  const k4 = 6;
  console.log(`Test Case 4: Expected 3, Got ${findKthLargest(nums4, k4)}`); // Expected output: 3

  // 테스트 케이스 5: 배열이 음수 값을 포함하는 경우
  const nums5 = [-1, -2, -3, -4, -5];
  const k5 = 2;
  console.log(`Test Case 5: Expected -2, Got ${findKthLargest(nums5, k5)}`); // Expected output: -2

  // 테스트 케이스 6: 배열이 단일 요소를 가지는 경우
  const nums6 = [42];
  const k6 = 1;
  console.log(`Test Case 6: Expected 42, Got ${findKthLargest(nums6, k6)}`); // Expected output: 42

  // 테스트 케이스 7: 배열의 길이가 k보다 작은 경우 (엣지 케이스)
  // const nums7 = [1, 2];
  // const k7 = 3;
  // console.log(`Test Case 7: Expected Error, Got ${findKthLargest(nums7, k7)}`);
}

// 테스트 실행
runTests();
