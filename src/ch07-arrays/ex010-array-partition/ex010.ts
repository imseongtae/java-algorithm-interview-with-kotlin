/**
 * Array Partition (LeetCode 561)
 *
 * 목표: 길이 2n의 정수 배열 nums를 n쌍으로 묶을 때, ∑ min(ai, bi)를 최대화하는 값 반환.
 *
 * 복잡도:
 *  - sortPair: O(n log n), O(1)~O(n) (정렬 구현에 따라)
 */
type Solver = (nums: number[]) => number;

/** 전략 1: 정렬 → 짝수 인덱스 합 */
const sortPair: Solver = (nums) => {
  const arr = nums.slice().sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < arr.length; i += 2) sum += arr[i];
  return sum;
};

export function arrayPairSum(nums: number[]): number {
  return sortPair(nums); // 기본은 정렬 전략
}
