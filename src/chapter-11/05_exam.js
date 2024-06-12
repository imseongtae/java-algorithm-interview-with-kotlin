// 42576

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function findUncompletedParticipant(participant, completion) {
  // 참가자와 완주자 배열이 주어집니다.
  const participantMap = new Map();

  // 모든 참가자를 해시 맵에 추가합니다.
  for (const person of participant) {
    // 참가자 이름을 키로, 횟수를 값으로 저장합니다.
    participantMap.set(person, (participantMap.get(person) || 0) + 1);
    // 만약 참가자가 해시 맵에 없으면, 0을 반환하고, 있으면 해당 값에 1을 더합니다.
  }

  // 모든 완주자를 해시 맵에서 제거합니다.
  for (const person of completion) {
    // 참가자 이름을 키로 찾아서 값을 감소시킵니다.
    if (participantMap.has(person)) {
      participantMap.set(person, participantMap.get(person) - 1);
      // 완주자를 해시 맵에서 하나씩 제거합니다.
    }
  }

  // 남아있는 키 값 중 값이 1인 키를 찾아냅니다.
  for (const [key, value] of participantMap) {
    if (value > 0) {
      return key; // 완주하지 못한 참가자 반환
    }
  }
}
