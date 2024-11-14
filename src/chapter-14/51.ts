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

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  // 두 트리의 루트 중 하나라도 null이라면, 다른 하나를 반환
  if (!root1) return root2;
  if (!root2) return root1;

  // 이 시점에서 root1과 root2는 둘 다 존재
  // 여기서부터 두 트리의 값을 병합해 나가야 함

  // root1과 root2 모두 값이 존재하는 경우, 값을 더해 새로운 값을 root1의 노드에 적용
  root1.val += root2.val;

  // 왼쪽 자식들을 병합하기 위해 재귀 호출
  root1.left = mergeTrees(root1.left, root2.left);

  // 오른쪽 자식들을 병합하기 위해 재귀 호출
  root1.right = mergeTrees(root1.right, root2.right);

  // 병합이 완료된 root1 트리를 반환
  return root1;
}
