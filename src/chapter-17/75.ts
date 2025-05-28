// 입국심사
function solution(n: number, times: number[]) {
  let answer = 0;
  let start = 1;
  let end = Math.max(...times) * n;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const total = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);

    if (total >= n) {
      answer = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return answer;
}

const n = 6;
const times = [5, 7, 10];

console.log('solution(n, times):', solution(n, times));
