function subsets(nums: number[]): number[][] {
  const result: number[][] = []; // 결과를 저장할 배열

  // 재귀적으로 부분집합을 찾는 함수 정의
  function dfs(index: number, subset: number[]): void {
    // 1. 현재 부분집합을 결과에 추가
    result.push([...subset]);

    // 2. 각 원소에 대해 포함/비포함 여부를 결정
    for (let i = index; i < nums.length; i++) {
      // 3. 현재 원소를 부분집합에 포함
      subset.push(nums[i]);

      // 4. 다음 원소로 이동 (재귀 호출)
      dfs(i + 1, subset);

      // 5. 백트래킹: 현재 원소를 제거하여 다음 경우를 고려
      subset.pop();
    }
  }

  // 6. 탐색 시작: 처음에는 빈 부분집합과 인덱스 0부터 시작
  dfs(0, []);

  return result;
}

console.log('nums: [1, 2, 3] => ', subsets([1, 2, 3]));
console.log('nums: [0] => ', subsets([0]));
