/**
 * LeetCode 121. Best Time to Buy and Sell Stock
 * 제약사항 (Contract):
 * - 입력: prices[i]는 i번째 날의 주가 (정수), 길이 n ≥ 1
 * - 처리: ★단 한 번★의 매수 후 매도 (순서 보장: 매수 < 매도)
 * - 출력: 얻을 수 있는 최대 이익 (없으면 0)
 */
import { maxProfit } from '../ex012';

// ✅ 기대값 자동 계산 유틸(브루트포스; 소형 랜덤 케이스 전용)
function expectedMaxProfitBruteforce(prices: number[]): number {
  let ans = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      ans = Math.max(ans, prices[j] - prices[i]);
    }
  }
  return ans;
}

// ✅ 배열 프리뷰 유틸 (대용량 출력 방지)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function preview(arr: number[]) {
  return arr.length <= 12
    ? `[${arr.join(', ')}]`
    : `[${arr[0]}, ${arr[1]}, ${arr[2]}, …, ${arr[arr.length - 3]}, ${arr[arr.length - 2]}, ${arr[arr.length - 1]}] (len=${arr.length})`;
}

describe('LeetCode 121 - Best Time to Buy and Sell Stock', () => {
  describe('정확성 테스트 (대표 케이스)', () => {
    type Case = { name: string; prices: number[]; expected: number };

    const cases: Case[] = [
      { name: '기본 예시1', prices: [7, 1, 5, 3, 6, 4], expected: 5 }, // 1→6
      { name: '기본 예시2(하락만)', prices: [7, 6, 4, 3, 1], expected: 0 },
      { name: '단일 원소(n=1)', prices: [5], expected: 0 },
      { name: '두 원소-상승', prices: [1, 2], expected: 1 },
      { name: '두 원소-하락', prices: [3, 1], expected: 0 },
      { name: '평지(모두 동일)', prices: [4, 4, 4, 4], expected: 0 },
      { name: '후반 급등', prices: [5, 4, 3, 2, 10], expected: 8 }, // 2→10
      { name: '초반 급등 후 하락', prices: [1, 9, 3, 2], expected: 8 }, // 1→9
      { name: '복합 변동', prices: [2, 1, 2, 1, 0, 1, 2], expected: 2 }, // 0→2
    ];

    test.each(cases)('$name | prices=${preview(prices)}', ({ prices, expected }) => {
      const copy = prices.slice(); // 원본 불변성 체크
      const got = maxProfit(copy);
      expect(got).toBe(expected);
      expect(copy).toEqual(prices);
    });
  });

  describe('엣지 및 계약 검증', () => {
    test('매수 < 매도 순서 보장 확인 (이익 계산 시 미래 가격만 고려)', () => {
      const prices = [3, 8, 2, 5]; // 최적: 3→8 = 5
      expect(maxProfit(prices.slice())).toBe(5);
    });

    test('최저가가 중간에 나타나는 경우', () => {
      const prices = [9, 8, 1, 6, 4];
      // 최저가 1 → 최고 매도 6 = 5
      expect(maxProfit(prices.slice())).toBe(5);
    });

    test('여러 후보가 있어도 최대 이익 선택', () => {
      const prices = [1, 5, 2, 10, 3, 7];
      // 후보: 1→5=4, 1→10=9, 2→10=8, 3→7=4 → 최대 9
      expect(maxProfit(prices.slice())).toBe(9);
    });

    test('큰 값 범위(문제 제약 내 가정)에서도 로직 유지', () => {
      const prices = [10000, 9999, 1, 10000];
      // 1→10000 = 9999
      expect(maxProfit(prices.slice())).toBe(9999);
    });
  });

  describe('랜덤 케이스 (소형) → 브루트포스 기대값 비교', () => {
    test('랜덤 입력 100회 반복(길이 n=10) → O(n^2) 기대값과 일치', () => {
      for (let t = 0; t < 100; t++) {
        const n = 10;
        const prices = Array.from({ length: n }, () => Math.floor(Math.random() * 50)); // [0,49]
        const got = maxProfit(prices.slice());
        const want = expectedMaxProfitBruteforce(prices);
        expect(got).toBe(want);
      }
    });
  });

  describe('성능 테스트 (로그용)', () => {
    const now = () =>
      typeof process?.hrtime?.bigint === 'function'
        ? Number(process.hrtime.bigint()) / 1e6 // ms
        : (globalThis as any).performance?.now?.() ?? Date.now();

    function measure(fn: (nums: number[]) => number, nums: number[], minMs = 250) {
      let calls = 0;
      const t0 = now();
      do {
        fn(nums.slice()); // 원본 불변성 유지
        calls++;
      } while (now() - t0 < minMs);
      const totalMs = now() - t0;
      return { totalMs, calls, avgMs: totalMs / calls };
    }

    test('대용량 입력 성능 측정', () => {
      const sizes = [1000, 5000, 10000, 20000];
      const results = sizes.map((n) => {
        const lenUp = Math.floor(n * 0.4);
        const lenDown = Math.floor(n * 0.3);
        const lenNoise = n - lenUp - lenDown;

        const up = Array.from({ length: lenUp }, (_, i) => i); // 점진 상승 구간
        const noise = Array.from({ length: lenNoise }, () => Math.floor(Math.random() * n)); // 노이즈
        const down = Array.from({ length: lenDown }, (_, i) => lenDown - i); // 점진 하락 구간

        const prices = [...up, ...noise, ...down];

        const { totalMs, calls, avgMs } = measure(maxProfit, prices, 250);
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
