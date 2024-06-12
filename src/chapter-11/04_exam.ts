// Top K Frequent Elements

function topKFrequent(nums: number[], k: number): number[] {
  // 1. 요소의 빈도 계산을 위한 Map 생성
  const frequencyMap = new Map<number, number>();

  // 배열을 순회하며 빈도 계산
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // 빈도 계산 결과 출력 (디버깅용)
  console.log(frequencyMap);

  // 2. 빈도를 기준으로 내림차순 정렬
  const sortedFrequencyArray = Array.from(frequencyMap.entries()).sort((a, b) => b[1] - a[1]);

  // 정렬 결과 출력 (디버깅용)
  console.log(sortedFrequencyArray);

  // 3. 상위 k개의 요소 추출
  const topKFrequentElements = sortedFrequencyArray.slice(0, k).map((entry) => entry[0]);

  // 최종 결과 반환
  return topKFrequentElements;
}

// 예제 테스트
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
