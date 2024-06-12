// 42576
const participantMap: { [key: string]: number } = {};

// 1. participant 배열을 순회하며 해시 테이블에 이름과 출현 횟수 저장
for (const name of participant) {
  if (participantMap[name]) {
    participantMap[name] += 1;
  } else {
    participantMap[name] = 1;
  }
}

// 2. completion 배열을 순회하며 해시 테이블에서 이름의 출현 횟수 감소
for (const name of completion) {
  if (participantMap[name]) {
    participantMap[name] -= 1;
  }
}

// 3. 해시 테이블을 순회하여 값이 0이 아닌 이름 찾기
for (const name in participantMap) {
  if (participantMap[name] !== 0) {
    return name;
  }
}

// 예외 처리: 모든 선수가 완주한 경우 (이 경우는 문제에서 발생하지 않음)
return '';
