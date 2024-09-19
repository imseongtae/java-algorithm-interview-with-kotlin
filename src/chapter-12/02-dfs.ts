const bfs = (V: number, graph: Map<number, number[]>): number[] => {
  const discovered: number[] = [];
  const stack: number[] = [];
  stack.push(V);

  while (stack.length > 0) {
    const v = stack.pop()!;
    if (!discovered.includes(v)) {
      discovered.push(v);
      const neighbors = graph.get(v);
      if (neighbors) {
        for (const w of neighbors) {
          stack.push(w);
        }
      }
    }
  }

  return discovered;
};

// 그래프 정의
const graph2: Map<number, number[]> = new Map([
  [1, [2, 3, 4]],
  [2, [5]],
  [3, [5]],
  [4, []],
  [5, [6, 7]],
  [6, []],
  [7, [3]],
]);

// BFS 호출 및 결과 출력
const result = bfs(1, graph2);
console.log(result); // 출력: [1, 4, 3, 5, 7, 6, 2]
