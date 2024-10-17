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

function diameterOfBinaryTree(root: TreeNode | null): number {
  // 지름을 추적하기 위한 변수를 선언
  let maxDiameter = 0;

  // 각 노드의 깊이를 계산하는 함수
  function dfs(node: TreeNode | null): number {
    // 노드가 null인 경우 깊이는 0입니다.
    if (node === null) return 0;

    // 왼쪽과 오른쪽 서브트리의 깊이를 재귀적으로 계산
    const leftDepth = dfs(node.left);
    const rightDepth = dfs(node.right);

    // 현재 노드를 루트로 하는 서브트리의 지름을 계산
    const currentDiameter = leftDepth + rightDepth;

    // 최대 지름을 업데이트
    maxDiameter = Math.max(maxDiameter, currentDiameter);

    // 현재 노드의 깊이를 반환 (왼쪽, 오른쪽 깊이 중 더 큰 값 + 1)
    return Math.max(leftDepth, rightDepth) + 1;
  }

  // 루트에서 DFS를 시작
  dfs(root);

  // 최종적으로 계산된 최대 지름을 반환
  return maxDiameter;
}
