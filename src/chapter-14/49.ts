// TreeNode 클래스 정의
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

// longestUnivaluePath 함수 정의
function longestUnivaluePath(root: TreeNode | null): number {
  // 전역 변수로 가장 긴 경로를 저장
  let maxLength = 0;

  // DFS를 사용하여 트리를 순회하는 함수
  function dfs(node: TreeNode | null): number {
    // 노드가 null이면 길이는 0
    if (node === null) return 0;

    // 왼쪽과 오른쪽 자식을 재귀적으로 탐색
    const leftPath = dfs(node.left);
    const rightPath = dfs(node.right);

    // 현재 노드와 자식들이 같은 값을 가지는 경우를 계산
    let left = 0,
      right = 0;
    if (node.left !== null && node.left.val === node.val) {
      left = leftPath + 1;
    }
    if (node.right !== null && node.right.val === node.val) {
      right = rightPath + 1;
    }

    // 현재 노드를 기준으로 하는 경로의 최대 길이 갱신
    maxLength = Math.max(maxLength, left + right);

    // 자식 중 더 긴 경로를 부모에게 반환
    return Math.max(left, right);
  }

  // 루트 노드부터 DFS 탐색 시작
  dfs(root);

  // 최종적으로 가장 긴 경로를 반환
  return maxLength;
}
