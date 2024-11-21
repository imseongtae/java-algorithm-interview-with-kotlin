function solution(operations) {
  const queue = [];

  operations.forEach((operation) => {
    const [command, value] = operation.split(' ');
    const num = Number(value);

    if (command === 'I') {
      // 숫자 삽입 후 정렬
      queue.push(num);
      queue.sort((a, b) => a - b);
    } else if (command === 'D' && queue.length > 0) {
      if (num === 1) {
        // 최댓값 삭제
        queue.pop();
      } else if (num === -1) {
        // 최솟값 삭제
        queue.shift();
      }
    }
  });

  // 결과 반환: 최댓값, 최솟값
  if (queue.length === 0) {
    return [0, 0];
  }
  return [queue[queue.length - 1], queue[0]];
}

// 예제 테스트
console.log(solution(['I 16', 'I -5643', 'D -1', 'D 1', 'D 1', 'I 123', 'D -1'])); // [0, 0]
console.log(solution(['I 7', 'I 5', 'I -5', 'D -1'])); // [7, 5]
