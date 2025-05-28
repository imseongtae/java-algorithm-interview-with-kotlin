function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const result: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      // i > 0일 때 nums[i] === nums[i - 1]이면 반복문을 건너뛰어야 중복된 triplet이 결과에 안 들어가게 됨
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const total = nums[i] + nums[left] + nums[right];

      if (total === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) {
          left = left + 1;
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right = right - 1;
        }

        left = left + 1;
        right = right - 1;
      } else if (total < 0) {
        left = left + 1;
      } else {
        right = right - 1;
      }
    }
  }

  return result;
}

const nums = [-1, 0, 1, 2, -1, -4];
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

console.log('threeSum(nums):', threeSum(nums));
