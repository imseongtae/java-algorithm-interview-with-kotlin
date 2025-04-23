function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1; // 7 - 1 = 6

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // 왼쪽이 정렬된 경우
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // 오른쪽이 정렬된 경우
    else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  // end of while

  return -1;
}

const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
// Output: 4

console.log('search:', search(nums, target));
