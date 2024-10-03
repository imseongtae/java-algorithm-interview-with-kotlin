const combinationSum = (candidates: number[], target: number): number[][] => {
  const result: number[][] = []; // 결과를 저장할 배열

  // DFS 탐색을 위한 재귀 함수 정의
  const dfs = (start: number, currentCombination: number[], remainingTarget: number) => {
    // 1. 남은 타겟이 0이면 유효한 조합이므로 결과 배열에 추가
    if (remainingTarget === 0) {
      result.push([...currentCombination]); // 현재까지의 조합을 깊은 복사로 추가
      return; // 이 경로는 완료되었으므로 종료
    }

    // 2. 남은 타겟이 0보다 작으면 이 경로는 유효하지 않으므로 종료
    if (remainingTarget < 0) {
      return; // 더 이상 진행할 필요가 없음
    }

    // 3. start부터 모든 후보 숫자를 순회하면서 조합을 탐색
    for (let i = start; i < candidates.length; i++) {
      currentCombination.push(candidates[i]); // 숫자 선택
      // 같은 숫자를 다시 사용할 수 있으므로 i를 그대로 전달
      dfs(i, currentCombination, remainingTarget - candidates[i]); // 재귀 호출
      currentCombination.pop(); // 백트래킹: 마지막 선택을 제거하고 다른 경로 탐색
    }
  };

  // DFS 탐색 시작: start는 0, 초기 조합은 빈 배열, 타겟은 주어진 값
  dfs(0, [], target);

  return result; // 결과 반환
};

console.log('candidates: [2, 3, 6, 7] target: 7 => ', combinationSum([2, 3, 6, 7], 7));
console.log('candidates: [2, 3, 5] target: 8 => ', combinationSum([2, 3, 5], 8));
