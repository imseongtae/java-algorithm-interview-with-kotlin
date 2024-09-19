// DFS 함수 정의
function recursiveDFS(
  v: number,
  discovered: Set<number>,
  graph: Map<number, number[]>,
): Set<number> {
  // 현재 노드를 발견한 것으로 마킹
  discovered.add(v);
  console.log(`Visited node: ${v}`); // 방문한 노드를 출력

  // v 노드의 인접 노드들을 순회
  for (const w of graph.get(v) || []) {
    // w가 아직 발견되지 않았다면 재귀적으로 탐색
    if (!discovered.has(w)) {
      recursiveDFS(w, discovered, graph);
    }
  }

  // 모든 인접 노드를 탐색한 후 discovered를 반환
  return discovered;
}

// DFS 테스트 실행
const discovered: Set<number> = new Set();

// 그래프 정의 (Java 코드와 동일한 구조)
const graph: Map<number, number[]> = new Map();
graph.set(1, [2, 3, 4]);
graph.set(2, [5]);
graph.set(3, [5]);
graph.set(4, []);
graph.set(5, [6, 7]);
graph.set(6, []);
graph.set(7, [3]);

recursiveDFS(1, discovered, graph);
