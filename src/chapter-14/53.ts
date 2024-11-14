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

function dfs(node: TreeNode | null): number {
  // 예외 처리: 노드가 null일 경우 높이 0을 반환
  if (node === null) return 0;

  // 재귀 DFS로 왼쪽 리프 노드까지 탐색
  const left = dfs(node.left);
  // 재귀 DFS로 오른쪽 리프 노드까지 탐색
  const right = dfs(node.right);

  // 왼쪽 또는 오른쪽 서브트리가 균형이 맞지 않거나 높이 차이가 1을 초과할 경우 -1 반환
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1;
  }

  // 왼쪽과 오른쪽 중 높은 노드 높이 +1 리턴(서브트리의 최대 높이에 1을 더하여 반환)
  return Math.max(left, right) + 1;
}

function isBalanced(root: TreeNode | null): boolean {
  // 높이 균형이 깨진 경우가 아니라면 true,
  // dfs 함수가 -1을 반환하면 높이 균형이 깨진 경우이므로 false 반환
  return dfs(root) !== -1;
}

// 테스트 케이스
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(3);
root.left.left.left = new TreeNode(4);
root.left.left.right = new TreeNode(4);

// 트리가 균형을 이루지 않으므로 false가 나와야 합니다.
console.log(isBalanced(root)); // Output: false
