function merge(intervals: number[][]): number[][] {
  // sort 메서드를 사용할 때, 정렬 기준(비교 함수, compareFunction)을 제공하면 숫자나 객체도 원하는 방식으로 정렬
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  console.log('sorted intervals: ', sortedIntervals);

  const result = mergeIntervals(intervals);
  return result;
}

const mergeIntervals = (intervals: number[][]): number[][] => {
  const merged: number[][] = [];

  for (const current of intervals) {
    // console.log(current);
    if (!merged.length || merged[merged.length - 1][1] < current[0]) {
      merged.push(current);
    } else {
      // 겹치는 경우 → 병합 (끝값을 최대값으로 업데이트)
      merged[merged.length - 1][1] = current[1];
    }
  }

  return merged;
};

const intervals = [
  [1, 3],
  [8, 11],
  [2, 6],
  [15, 18],
];

console.log('intervals: ', intervals);

console.log('========== merge output ==========');
const result = merge(intervals);

console.log('result:', result);
