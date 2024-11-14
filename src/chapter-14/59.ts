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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  // Step 1: 기본 조건 확인
  // 만약 배열이 비어 있다면, 더 이상 구성할 트리가 없음
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }

  // Step 2: 전위 순회의 첫 번째 요소가 현재 서브트리의 루트 노드
  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);

  // Step 3: 중위 순회에서 루트 노드의 위치를 찾음
  const rootIndexInInorder = inorder.indexOf(rootVal);

  // Step 4: 중위 순회를 기준으로 왼쪽과 오른쪽 서브트리를 분할
  const leftInorder = inorder.slice(0, rootIndexInInorder);
  const rightInorder = inorder.slice(rootIndexInInorder + 1);

  // Step 5: 전위 순회 배열에서 왼쪽과 오른쪽 서브트리를 분할
  // 왼쪽 서브트리의 길이는 중위 배열에서 왼쪽 부분의 길이와 같음
  const leftPreorder = preorder.slice(1, leftInorder.length + 1);
  const rightPreorder = preorder.slice(leftInorder.length + 1);

  // Step 6: 재귀적으로 왼쪽과 오른쪽 서브트리를 구성
  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  // 완성된 트리의 루트를 반환
  return root;
}
