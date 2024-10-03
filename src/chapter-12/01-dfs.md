# 그래프 순회
그래프 순회란 그래프 탐색이라고도 하며, 그래프의 각 정점을 방문하는 과정을 말한다.
이 방문 과정에는 깊이 우선 탐색(DFS)과 너비 우선 탐색(BFS) 이렇게 2가지 알고리즘이 있다.

## Table of contents
1. [그래프의 등장 배경](#그래프의-등장-배경)
1. [그래프 순회]()

---


## DFS


### 수도 코드

```
DFS(G, v)
  label v as discovered
  for all directed edges from v to w that are in G.adjacentEdges(v) do
    if vertex w is not labeld as discovered then
      recursively call DFS(G, w)
```

### TypeScript

```ts
type Graph = {
  adjacentEdges: (v: number) => number[];
};

const DFS = (G: Graph, v: number, discovered: boolean[]) => {
  // 현재 정점을 발견했다고 표시
  discovered[v] = true;

  // 현재 정점 v의 모든 인접 정점을 순회
  for (const w of G.adjacentEdges(v)) {
    // 인접 정점이 아직 발견되지 않았다면 DFS 재귀호출
    if (!discovered[w]) {
      DFS(G, w, discovered);
    }
  }
};

// 예시 그래프 데이터 및 사용 방법
const graph: Graph = {2
  adjacentEdges: (v: number) => {
    const adjList: { [key: number]: number[] } = {
      1: [2, 3, 4],
      2: [5],
      3: [5],
      4: [],
      5: [6, 7],
      6: [],
      7: [3],
    };
    return adjList[v] || [];
  },
};

const discovered = Array(8).fill(false) as boolean[];
DFS(graph, 1, discovered);
console.log(discovered);
```

#### 출력

```bash
# 1번 정점에서 시작하여 모든 정점을 탐색했음을 보여줌. true인 값은 해당 정점이 탐색되었음을 나타냄
[ false, true, true, true, true, true, true, true ]
```
