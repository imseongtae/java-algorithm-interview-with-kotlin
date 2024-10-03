function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // 1. 각 코스의 전제 조건을 기록하는 배열 (in-degree 배열)
  const inDegree: number[] = new Array(numCourses).fill(0);
  // 2. 각 코스에 대한 전제 조건을 기록하는 그래프
  const graph: Map<number, number[]> = new Map();

  // 3. prerequisites 배열을 순회하며 in-degree 배열과 그래프 생성
  for (const [course, pre] of prerequisites) {
    // 전제 조건 수 증가
    inDegree[course]++;
    // 전제 조건 그래프 생성
    if (graph.has(pre)) {
      graph.get(pre)!.push(course);
    } else {
      graph.set(pre, [course]);
    }
  }

  // 4. 전제 조건이 없는 코스를 큐에 넣음
  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  // 5. 큐에서 요소를 하나씩 꺼내며 위상 정렬 수행
  let count = 0; // 처리된 코스 수
  while (queue.length > 0) {
    const current = queue.shift()!;
    count++; // 하나의 코스를 처리했으므로 count 증가

    // current 코스가 전제 조건인 다른 코스들의 전제 조건 수를 줄임
    if (graph.has(current)) {
      for (const neighbor of graph.get(current)!) {
        inDegree[neighbor]--;
        // 전제 조건이 모두 해결된 경우 큐에 추가
        if (inDegree[neighbor] === 0) {
          queue.push(neighbor);
        }
      }
    }
  }

  // 6. 처리된 코스 수가 전체 코스 수와 같은지 확인
  return count === numCourses;
}

// 문제풀이를 위한 단계적 접근
/**
 * 1. 그래프 생성
 * 2. 위상 정렬을 위한 큐 초기화
 * 3. 위상 정렬 수행
 * 4. 결과
 *   - 큐에서 꺼낸 코스의 개수가 전체 코스의 개수와 같으면 모든 코스를 수강할 수 있음
 *   - 그렇지 않다면, 그래프에 사이클이 존재하여 모든 코스를 수강할 수 없다는 의미
 */
