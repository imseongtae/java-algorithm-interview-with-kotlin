// eslint-disable-next-line @typescript-eslint/no-unused-vars
function numJewelsInStones_1(J: string, S: string): number {
  // 1. 보석들을 저장할 해시맵을 만든다.
  const jewelsMap: { [key: string]: boolean } = {};

  // 2. J 문자열의 각 문자를 해시맵에 추가한다.
  for (const jewel of J) {
    // jewelsMap 해시맵에 jewel 문자를 키로 추가하고, 값을 true로 설정
    jewelsMap[jewel] = true;
  }
  // 예시: J = "aA"일 때 jewelsMap = { 'a': true, 'A': true }

  // 3. S 문자열을 순회하며 보석의 개수를 센다.
  let count = 0; // 보석의 개수를 저장할 변수

  for (const stone of S) {
    // 현재 돌(stone)이 jewelsMap에 있는지 확인
    if (jewelsMap[stone]) {
      count++; // 보석이면 개수를 증가시킨다.
    }
  }
  // 예시: S = "aAAbbbb"일 때
  // 'a' -> jewelsMap에 있음, count = 1
  // 'A' -> jewelsMap에 있음, count = 2
  // 'A' -> jewelsMap에 있음, count = 3
  // 'b' -> jewelsMap에 없음, count = 3
  // 'b' -> jewelsMap에 없음, count = 3
  // 'b' -> jewelsMap에 없음, count = 3
  // 'b' -> jewelsMap에 없음, count = 3

  // 4. 최종 보석의 개수를 반환한다.
  return count; // 결과는 3
}

// 함수 호출 예시
const J1 = 'aA';
const S1 = 'aAAbbbb';
console.log(numJewelsInStones_1(J1, S1)); // 출력: 3
