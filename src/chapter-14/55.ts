class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// 정렬된 배열을 높이 균형 이진 탐색 트리로 변환하는 함수
function construct(nums: number[], lo: number, hi: number): TreeNode | null {
  // 예외 처리: lo가 hi보다 크다면 null을 반환하여 재귀 종료
  if (lo > hi) return null;

  // 중간 인덱스 계산. 소수점 내림을 위해 Math.floor 사용
  const mid = lo + Math.floor((hi - lo) / 2);
  // 중간 값을 이용해 트리 노드 생성
  const node = new TreeNode(nums[mid]);

  // 왼쪽 자식 트리 생성: 중간값 이전 인덱스 구간에 대해 재귀 호출
  node.left = construct(nums, lo, mid - 1);
  // 오른쪽 자식 트리 생성: 중간값 이후 인덱스 구간에 대해 재귀 호출
  node.right = construct(nums, mid + 1, hi);

  return node;
}

// 메인 함수: 배열을 받아 트리 생성 시작
function sortedArrayToBST(nums: number[]): TreeNode | null {
  // 배열이 비어 있는 경우 null을 반환
  if (nums.length === 0) return null;

  // 배열의 전체 구간을 넘겨 트리 생성 시작
  return construct(nums, 0, nums.length - 1);
}
