// Longest Substring Without Repeating Characters

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function lengthOfLongestSubstring(s: string): number {
  // 슬라이딩 윈도우의 두 포인터
  let left = 0;
  let right = 0;

  // 가장 긴 부분 문자열의 길이
  let maxLength = 0;

  // 문자의 마지막 인덱스를 저장할 해시맵
  const charIndexMap: { [key: string]: number } = {};

  // 문자열을 끝까지 순회
  while (right < s.length) {
    const currentChar = s[right];

    // 만약 현재 문자가 이미 해시맵에 존재하고, 그것이 left 포인터보다 뒤에 있다면
    if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= left) {
      // left 포인터를 현재 문자 다음 인덱스로 이동
      left = charIndexMap[currentChar] + 1;
    }

    // 현재 문자의 인덱스를 해시맵에 업데이트
    charIndexMap[currentChar] = right;

    // 현재 윈도우의 길이를 계산하고, 최대 길이를 업데이트
    maxLength = Math.max(maxLength, right - left + 1);

    // right 포인터를 이동
    right++;
  }

  // 가장 긴 부분 문자열의 길이를 반환
  return maxLength;
}
