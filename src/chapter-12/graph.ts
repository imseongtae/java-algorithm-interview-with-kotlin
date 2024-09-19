// 그래프 자료구조 및 순회 알고리즘 직접 구현해보기
export class Graph {
  // 노드들을 저장할 수 있는 adjacencyList 객체 정의
  adjacencyList: { [key: string]: string[] };

  constructor() {
    // 그래프의 각 노드와 그 노드에 연결된 노드들을 저장하는 객체
    this.adjacencyList = {};
  }

  // 새로운 노드를 추가하는 메서드
  addVertex(vertex: string): void {
    // 노드가 존재하지 않는 경우에만 추가
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // 두 노드를 연결하는 간선을 추가하는 메서드
  addEdge(v1: string, v2: string): void {
    // 두 노드가 존재할 때만 연결
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1); // 무향이므로 양쪽 모두 추가
    }
  }

  // 깊이 우선 탐색 (DFS)
  depthFirstSearch(start: string): string[] {
    const result: string[] = [];
    const visited: { [key: string]: boolean } = {};

    // 내부 재귀 함수
    const dfs = (vertex: string) => {
      if (!vertex) return;
      // 현재 노드를 방문 처리하고 결과에 추가
      visited[vertex] = true;
      result.push(vertex);

      // 연결된 모든 노드에 대해 탐색
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      });
    };

    dfs(start); // 시작 노드부터 탐색 시작
    return result;
  }

  // 너비 우선 탐색 (BFS)
  breadthFirstSearch(start: string): string[] {
    const queue: string[] = [start];
    const result: string[] = [];
    const visited: { [key: string]: boolean } = {};
    visited[start] = true;

    while (queue.length) {
      const vertex = queue.shift(); // 큐에서 노드를 하나 뽑음
      if (vertex) {
        result.push(vertex);
        // 인접한 노드들을 탐색
        this.adjacencyList[vertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor); // 큐에 추가
          }
        });
      }
    }

    return result;
  }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');

console.log('DFS:', g.depthFirstSearch('A')); // [ 'A', 'B', 'D', 'C', 'E' ]
console.log('BFS:', g.breadthFirstSearch('A')); // [ 'A', 'B', 'C', 'D', 'E' ]
