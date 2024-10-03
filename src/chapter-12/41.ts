function findItinerary(tickets: string[][]): string[] {
  // 1. 그래프를 표현하는 Map 생성 (출발지 -> 도착지들)
  const graph: Map<string, string[]> = new Map();

  // 2. 티켓을 사용해 그래프 생성
  for (const [from, to] of tickets) {
    if (!graph.has(from)) {
      graph.set(from, []);
    }
    graph.get(from)!.push(to);
  }

  // 3. 각 출발지의 도착지 리스트를 사전 순으로 정렬
  for (const [from, destinations] of graph) {
    destinations.sort();
  }

  const result: string[] = []; // 경로를 저장할 리스트

  // 4. DFS 탐색 함수
  function dfs(airport: string) {
    const destinations = graph.get(airport);

    // 현재 출발지에서 도착할 수 있는 모든 목적지 방문
    while (destinations && destinations.length > 0) {
      // 사전 순으로 가장 빠른 목적지를 선택
      const next = destinations.shift()!;
      dfs(next); // 해당 목적지에서 다시 탐색 시작
    }

    // 모든 목적지를 방문했거나 더 이상 갈 곳이 없으면 경로 저장
    result.push(airport);
  }

  // 5. JFK에서 시작하여 DFS 탐색 시작
  dfs('JFK');

  // 6. 결과는 역순으로 저장되므로 뒤집어서 반환
  return result.reverse();
}

// 예제
const airlineTickets = [
  ['MUC', 'LHR'],
  ['JFK', 'MUC'],
  ['SFO', 'SJC'],
  ['LHR', 'SFO'],
];
console.log(findItinerary(airlineTickets));
