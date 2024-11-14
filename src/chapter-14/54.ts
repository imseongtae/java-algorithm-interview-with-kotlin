// 그래프 생성 함수: 노드와 간선 정보를 이용해 무방향 그래프 구성
const buildGraph = (n: number, edges: number[][]): Map<number, Set<number>> => {
  const graph = new Map<number, Set<number>>();
  for (let i = 0; i < n; i++) {
    graph.set(i, new Set()); // 각 노드에 대한 빈 집합 초기화
  }
  for (const [u, v] of edges) {
    graph.get(u)?.add(v); // 양방향 간선 추가
    graph.get(v)?.add(u);
  }
  return graph;
};

// 리프 노드 찾기
const findLeaves = (graph: Map<number, Set<number>>): number[] => {
  const leaves: number[] = [];
  for (const [node, neighbors] of graph) {
    if (neighbors.size === 1) {
      // degree가 1인 경우 리프 노드
      leaves.push(node);
    }
  }
  return leaves;
};

const findMinHeightTrees = (n: number, edges: number[][]): number[] => {
  if (n === 1) return [0]; // 단일 노드 트리인 경우 루트는 자기 자신

  const graph = buildGraph(n, edges);
  let leaves = findLeaves(graph);

  // 리프 노드를 반복적으로 제거하면서 중심 노드 찾기
  while (n > 2) {
    n -= leaves.length; // 현재 리프 노드 수만큼 노드 수 감소
    const newLeaves: number[] = [];

    for (const leaf of leaves) {
      const neighbor = Array.from(graph.get(leaf) || [])[0];
      graph.get(neighbor)?.delete(leaf); // 이웃 노드에서 리프 노드 제거

      if ((graph.get(neighbor)?.size || 0) === 1) {
        // 새로운 리프 노드 확인
        newLeaves.push(neighbor);
      }
    }

    leaves = newLeaves; // 새 리프 노드 목록 갱신
  }

  return leaves; // 남은 노드가 최소 높이 트리의 루트
};

const edges = [
  [1, 0],
  [1, 2],
  [1, 3],
];

console.log(findMinHeightTrees(4, edges));
