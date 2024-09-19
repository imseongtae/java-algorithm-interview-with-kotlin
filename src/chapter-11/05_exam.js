// 42576 - 완주하지 못한 선수

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function findUncompletedParticipant(participant, completion) {
  // Step 1: 해시 맵 생성
  // 참가자와 완주자 배열이 주어집니다.
  const participantMap = new Map();

  // Step 2: 참가자 배열을 순회하며 해시 맵에 추가
  // 모든 참가자를 해시 맵에 추가
  for (const person of participant) {
    // 참가자 이름을 키로, 횟수를 값으로 저장합니다.
    participantMap.set(person, (participantMap.get(person) || 0) + 1);
    // 예시:
    // 첫 번째 순회 - person: "mike", participantMap: {"mike" => 1}
    // 두 번째 순회 - person: "john", participantMap: {"mike" => 1, "john" => 1}
    // 세 번째 순회 - person: "anna", participantMap: {"mike" => 1, "john" => 1, "anna" => 1}
  }

  // Step 3: 완주자 배열을 순회하며 해시 맵에서 값 감소
  for (const person of completion) {
    // 참가자 이름을 키로 찾아서 값을 감소
    if (participantMap.has(person)) {
      participantMap.set(person, participantMap.get(person) - 1);
      // 완주자를 해시 맵에서 하나씩 제거
      // 예시:
      // 첫 번째 순회 - person: "john", participantMap: {"mike" => 1, "john" => 0, "anna" => 1}
      // 두 번째 순회 - person: "anna", participantMap: {"mike" => 1, "john" => 0, "anna" => 0}
    }
  }

  // Step 4: 값이 0보다 큰 키를 찾아 반환
  for (const [key, value] of participantMap) {
    // 남아있는 키 값 중 값이 1인 키를 찾아냄
    if (value > 0) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return key; // 완주하지 못한 참가자 반환
      // key: "mike", value: 1 -> "mike" 반환
    }
  }
}
