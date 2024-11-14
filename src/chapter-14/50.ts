// 226 Invert Binary Tree

import { printTreeVisual } from './printTreeVisual';

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

function invertTree(node: TreeNode | null): TreeNode | null {
  // 1. 종료 조건 설정: 노드가 없을 때, 재귀를 종료하는 것 필요
  if (node === null) {
    return null;
  }

  // 2. 현재 루트의 자식 교환
  const temp = node.left;
  node.left = node.right;
  node.right = temp;

  // 3. 재귀적으로 자식 노드들에 대해 동일한 작업 수행
  invertTree(node.left);
  invertTree(node.right);

  // 4. 자식 노드들의 반전 이후, 루트 노드 반환
  return node;
}

const root: TreeNode = new TreeNode(
  2,
  // new TreeNode(1, new TreeNode(2), new TreeNode(3)),
  // new TreeNode(3, new TreeNode(1), new TreeNode(2)),
  //
  new TreeNode(1),
  new TreeNode(3),
);

printTreeVisual(root);

invertTree(root);

console.log('=======================');
printTreeVisual(root);
