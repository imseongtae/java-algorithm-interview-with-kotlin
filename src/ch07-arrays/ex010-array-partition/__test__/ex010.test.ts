/**
 * LeetCode 561. Array Partition
 * 제약사항 (Contract):
 * - 입력: 길이가 2n인 정수 배열 nums (음수/중복 허용, 범위 -1e4~1e4)
 * - 처리: 쌍을 묶어 각 쌍의 min 합을 최대화
 */
import { arrayPairSum } from '../ex010';

// ✅ 기대값 자동 계산 유틸: 정렬 후 짝수 인덱스 합
function expectedArrayPairSum(nums: number[]): number {
  const arr = nums.slice().sort((a, b) => a - b);
  let acc = 0;
  for (let i = 0; i < arr.length; i += 2) acc += arr[i];
  return acc;
}

// ✅ 배열 프리뷰 유틸 (대용량 출력 방지)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function preview(arr: number[]) {
  return arr.length <= 10
    ? `[${arr.join(', ')}]`
    : `[${arr[0]}, ${arr[1]}, …, ${arr[arr.length - 2]}, ${arr[arr.length - 1]}] (len=${arr.length})`;
}

describe('LeetCode 561 - Array Partition', () => {
  describe('정확성 테스트', () => {
    type Case = { name: string; nums: number[]; expected?: number };

    const cases: Case[] = [
      { name: '기본 예시1', nums: [1, 4, 3, 2], expected: 4 },
      { name: '기본 예시2', nums: [6, 2, 6, 5, 1, 2], expected: 9 },
      { name: '최소 입력(n=1)', nums: [1, 2], expected: 1 },
      { name: '음수 포함', nums: [-5, -1, 0, 2], expected: -5 },
      { name: '중복 포함', nums: [1, 1, 2, 2, 3, 3], expected: 6 },
      {
        name: '대용량(상한 근사)',
        nums: Array.from({ length: 20000 }, (_, i) => i),
        expected: 99990000,
      },
    ];

    test.each(cases)('$name | nums=${preview(nums)}', ({ nums, expected }) => {
      const copy = nums.slice(); // 원본 불변성 체크를 위해 복제
      const got = arrayPairSum(copy);
      const want = expected ?? expectedArrayPairSum(nums);

      // 정확성
      expect(got).toBe(want);

      // 입력 배열 불변성 검증
      expect(copy).toEqual(nums);
    });
  });

  describe('엣지 및 계약 검증', () => {
    test('정렬 전제: 무작위 입력', () => {
      const nums = [9, -1, 9, -1];
      expect(arrayPairSum(nums.slice())).toBe(8); // [-1, -1, 9, 9] → -1 + 9
    });

    test('이미 정렬된 입력', () => {
      const nums = [-3, -2, 1, 4];
      expect(arrayPairSum(nums.slice())).toBe(-2); // [-3, -2], [1, 4] → -3 + 1 = -2
    });

    test('큰 음수/양수 혼재', () => {
      const nums = [-10000, -9999, 9999, 10000];
      expect(arrayPairSum(nums.slice())).toBe(-1); // [-10000, -9999], [9999, 10000] → -10000 + 9999
    });

    test('모든 값이 동일한 경우', () => {
      const nums = [5, 5, 5, 5];
      expect(arrayPairSum(nums.slice())).toBe(10); // 항상 짝수 인덱스 2개 합
    });

    test('음수만 존재하는 경우', () => {
      const nums = [-8, -3, -2, -1];
      expect(arrayPairSum(nums.slice())).toBe(-10); // [-8, -3], [-2, -1] → -8 + -2
    });
  });

  describe('랜덤 케이스 검증', () => {
    test('랜덤 입력 100회 반복 → 수동 기대값 비교', () => {
      for (let i = 0; i < 100; i++) {
        const nums = Array.from({ length: 20 }, () => Math.floor(Math.random() * 200 - 100));
        const got = arrayPairSum(nums.slice());
        const want = expectedArrayPairSum(nums);
        expect(got).toBe(want);
      }
    });
  });

  describe('성능 테스트 (로그용)', () => {
    const now = () =>
      typeof process?.hrtime?.bigint === 'function'
        ? Number(process.hrtime.bigint()) / 1e6 // ms
        : performance.now();

    function measure(fn: (nums: number[]) => number, nums: number[], minMs = 250) {
      let calls = 0;
      const t0 = now();
      do {
        fn(nums.slice());
        calls++;
      } while (now() - t0 < minMs);
      const totalMs = now() - t0;
      return { totalMs, calls, avgMs: totalMs / calls };
    }

    test('대용량 입력 성능 측정', () => {
      const sizes = [1000, 5000, 10000, 20000];
      const results = sizes.map((n) => {
        const nums = Array.from({ length: n }, (_, i) => i);
        const { totalMs, calls, avgMs } = measure(arrayPairSum, nums, 250);
        return {
          입력크기: n,
          호출수: calls,
          총실행시간_ms: totalMs.toFixed(2),
          평균_ms_호출당: avgMs.toFixed(5),
        };
      });

      console.table(results);
      // 항상 통과, 로그 기록용
      expect(true).toBe(true);
    });
  });
});
