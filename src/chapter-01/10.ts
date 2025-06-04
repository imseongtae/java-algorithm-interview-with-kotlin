// 561. Array Partition
function arrayPairSum(nums: number[]): number {
  let result: number = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i = i + 2) {
    result += nums[i];
  }

  return result;
}

// Input
const nums = [1, 4, 3, 2];
// const nums = [6, 2, 6, 5, 1, 2];
// Output: 4

console.log('arrayPairSum(nums):', arrayPairSum(nums));
