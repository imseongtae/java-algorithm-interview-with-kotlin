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

// 이전 노드의 값
let prev: number | null = null;
let minDiff = Infinity;

function minDiffInBST(root: TreeNode | null): number {
  // base case: 노드가 null이면 종료
  if (root === null) return minDiff;

  if (root?.left != null) {
    // 왼쪽 자식 노드 맨 아래까지 탐색
    minDiffInBST(root.left);
  }

  if (prev !== null) {
    // 현재 노드 값과 이전 노드 값의 차이를 구하고 최솟값인지 확인
    minDiff = Math.min(minDiff, root.val - prev);
  }

  // 현재 노드 값을 이전 노드 값으로 설정
  prev = root.val;

  // 오른쪽 자식 노드 재귀 탐색
  if (root.right != null) {
    minDiffInBST(root.right);
  }

  // 최솟값을 결과로 리턴
  return minDiff;
}
