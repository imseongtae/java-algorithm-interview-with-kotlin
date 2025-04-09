function reorderLogFiles(logs: string[]): string[] {
  const letterLogs: string[] = [];
  const digitLogs: string[] = [];

  for (const log of logs) {
    if (isDigitLog(log)) {
      digitLogs.push(log);
    } else {
      letterLogs.push(log);
    }
  }

  letterLogs.sort((a, b) => {
    const [idA, ...restA] = a.split(' ');
    const [idB, ...restB] = b.split(' ');

    const contentA = restA.join(' ');
    const contentB = restB.join(' ');

    if (contentA === contentB) {
      return idA.localeCompare(idB);
    }
    return contentA.localeCompare(contentB);
  });

  return [...letterLogs, ...digitLogs];
}

function isDigitLog(log: string) {
  const [id, ...rest] = log.split(' ');
  // console.log('id:', id);
  // console.log('rest:', rest);
  return /\d/.test(rest[0]);
}

const logs = ['dig1 8 1 5 1', 'let1 art can', 'dig2 3 6', 'let2 own kit dig', 'let3 art zero'];
// const expected = ['let1 art can', 'let3 art zero', 'let2 own kit dig', 'dig1 8 1 5 1', 'dig2 3 6'];
console.log(reorderLogFiles(logs));
