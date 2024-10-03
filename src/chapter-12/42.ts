// 반복 DFS 방식으로 풀이
function findItinerary(tickets: string[][]): string[] {
  // 1. 그래프 초기화
  const graph: { [key: string]: string[] } = {};

  // 주어진 티켓을 그래프로 변환
  tickets.forEach(([from, to]) => {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  });

  // 2. 각 출발지에 대해 도착지를 알파벳 역순으로 정렬 (스택 구조로 처리하기 위해)
  for (const from in graph) {
    graph[from].sort((a, b) => b.localeCompare(a));
  }

  // 3. DFS를 위한 스택과 결과 경로를 담을 리스트 초기화
  const stack: string[] = ['ICN'];
  const result: string[] = [];

  // 4. 반복 DFS 수행
  while (stack.length > 0) {
    const node = stack[stack.length - 1]; // 스택의 마지막 노드를 확인

    // 더 방문할 곳이 없다면 경로에 추가
    if (!graph[node] || graph[node].length === 0) {
      result.push(stack.pop()!); // 경로에 추가하고 스택에서 제거
    } else {
      // 남은 도착지가 있으면 스택에 추가
      stack.push(graph[node].pop()!);
    }
  }

  // 5. 결과는 역순이므로 다시 뒤집어서 반환
  return result.reverse();
}

// 테스트
const tickets = [
  ['ICN', 'JFK'],
  ['HND', 'IAD'],
  ['JFK', 'HND'],
];
console.log(findItinerary(tickets)); // ["ICN", "JFK", "HND", "IAD"]
