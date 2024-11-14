/**
 * Definition for a binary tree node.
 */
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

const rangeSumBST = (root: TreeNode | null, low: number, high: number): number => {
  // 예외 처리
  if (root === null) {
    return 0;
  }

  let result = 0;
  // 현재 노드의 값이 low와 high 사이에 있다면 결과에 추가
  if (low <= root.val && root.val <= high) {
    result = root.val;
    console.log('result:', result);
  }

  // 자식 노드 재귀 DFS 진행
  const leftSum = rangeSumBST(root.left, low, high);
  const rightSum = rangeSumBST(root.right, low, high);

  return result + leftSum + rightSum;
};

// 테스트 케이스 1: 일반적인 이진 탐색 트리
const root1 = new TreeNode(10);
root1.left = new TreeNode(5);
root1.right = new TreeNode(15);
root1.left.left = new TreeNode(3);
root1.left.right = new TreeNode(6);
root1.right.left = new TreeNode(undefined);
root1.right.right = new TreeNode(18);

const result1 = rangeSumBST(root1, 6, 15);
console.log(`Test Case 1: Expected 31, Got ${result1}`); // 출력 결과: 32
