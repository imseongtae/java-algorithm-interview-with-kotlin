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

// 트리의 높이를 계산하는 함수
const getTreeHeight = (node: TreeNode | null): number => {
  if (node === null) return 0;
  return 1 + Math.max(getTreeHeight(node.left), getTreeHeight(node.right));
};

// 트리를 2D 배열에 채우는 함수
const fillTree = (
  grid: string[][],
  node: TreeNode | null,
  row: number,
  col: number,
  width: number,
) => {
  if (node === null) return;
  grid[row][col] = node.val.toString();

  if (node.left) {
    grid[row + 1][col - width] = '/';
    fillTree(grid, node.left, row + 2, col - width * 2, width / 2);
  }

  if (node.right) {
    grid[row + 1][col + width] = '\\';
    fillTree(grid, node.right, row + 2, col + width * 2, width / 2);
  }
};

// 트리를 시각적으로 출력하는 함수
export const printTreeVisual = (root: TreeNode | null) => {
  if (root === null) return;

  const height = getTreeHeight(root);
  const width = Math.pow(2, height - 1) * 2;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const grid: string[][] = Array(height * 2 - 1)
    .fill(null)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    .map(() => Array(width).fill(' '));

  fillTree(grid, root, 0, Math.floor(width / 2), Math.floor(width / 4));

  // 그리드의 각 행을 출력
  for (const row of grid) {
    console.log(row.join(''));
  }
};
