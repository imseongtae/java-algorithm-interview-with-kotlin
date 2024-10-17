// TreeNode 클래스 정의
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

// 최대 깊이를 계산하는 함수
function maxDepth(root: TreeNode | null): number {
  // 1. 기저 조건 (Base case): 노드가 null이면 0을 반환
  if (root === null) {
    return 0;
  }

  // 2. 왼쪽 서브트리의 최대 깊이를 재귀적으로 구함
  const leftDepth = maxDepth(root.left);

  // 3. 오른쪽 서브트리의 최대 깊이를 재귀적으로 구함
  const rightDepth = maxDepth(root.right);

  // 4. 더 큰 값에 1을 더해 현재 노드까지의 깊이를 반환
  return Math.max(leftDepth, rightDepth) + 1;
}
