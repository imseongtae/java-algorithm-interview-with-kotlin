function largestNumber(nums: number[]): string {
  const temp: number[] = [...nums];

  for (let i = 1; i < temp.length; i++) {
    const current = temp[i]; // 현재 삽입할 값
    let j = i - 1;

    // 현재 값보다 큰 값들을 오른쪽으로 밀기
    // 핵심: 두 숫자를 문자열로 이어붙여서 비교
    while (j >= 0 && `${temp[j]}${current}` < `${current}${temp[j]}`) {
      temp[j + 1] = temp[j];
      j--;
    }

    temp[j + 1] = current;
  }

  const result: string = temp.join('');
  return result;
}

// const numbers = [10, 2];
const numbers = [3, 30, 34, 5, 9];

console.log('largestNumber:', largestNumber(numbers)); // expected: 9534330
