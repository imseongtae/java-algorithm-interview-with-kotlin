function search(nums: number[], target: number): number {
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }

  return -1;
}

const nums = [-1, 0, 3, 5, 9, 12];
const target = 3;

console.log('search:', search(nums, target));
