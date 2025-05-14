function twoSum(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    let left = i + 1;
    let right = numbers.length - 1;
    const expected = target - numbers[i];

    while (left <= right) {
      const mid = left + (right - left) / 2;

      if (numbers[mid] < expected) {
        left = mid + 1;
      } else if (numbers[mid] > expected) {
        right = mid - 1;
      } else {
        return [i + 1, mid + 1] as number[];
      }
    }
  }

  return [];
}

// Input:
const numbers = [2, 7, 11, 15];
const target = 9;
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

console.log('numbers:', numbers);
console.log('target:', target);
console.log('twoSum:', twoSum(numbers, target));
