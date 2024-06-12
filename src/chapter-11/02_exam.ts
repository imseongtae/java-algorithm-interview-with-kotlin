// Jewels and Stones

function numJewelsInStones(jewels: string, stones: string): number {
  // 1. 해시 테이블(집합)을 이용하여 jewel 저장
  const jewelSet = new Set<string>();

  // jewels 각 문자를 집합에 추가
  for (const jewel of jewels) {
    jewelSet.add(jewel); // 'a'와 'A'를 집합에 추가
  }

  let count = 0;

  // 3. stones 순회하면서 보석인지 확인
  for (const stone of stones) {
    // 만약 현재 문자가 보석이라면
    if (jewelSet.has(stone)) {
      count++; // count 증가
    }
  }

  // 4. 총 보석의 수 반환
  return count;
}

// Test the function
const J = 'aA';
const S = 'aAAbbbb';
console.log(numJewelsInStones(J, S)); // Output: 3
