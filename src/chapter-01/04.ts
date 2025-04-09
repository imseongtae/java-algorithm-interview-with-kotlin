/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  //
  let low = 0;
  let mid = 0;
  let high = nums.length - 1; // 2;

  // 초기 상태: nums = [2,0,1]
  // low = 0, mid = 0, high = 2

  // 반복횟수 1, 2, 2 -> swap (mid, high), [1, 0, 2], (0, 0, 1)
  // 반복횟수 2, 1, 1 -> mid++           , [1, 0, 2], (0, 1, 1)
  // 반복횟수 3, 1, 0 -> swap (mid, low) , [0, 1, 2], (1, 2, 1)

  // console.log(`nums = [${nums}], low = ${low}, mid = ${mid}, high = ${high}`);
  // console.log('--- 반복문 시작 ---');

  while (mid <= high) {
    if (nums[mid] === 0) {
      // 0은 왼쪽으로 보냄
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // 1은 가운데로 유지
      mid++;
    } else {
      // 2는 오른쪽으로 보냄
      // nums[mid] === 2
      // 0번째와 2번째 swap
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }

    // 확인용 로그
    console.log(`nums = [${nums}], low = ${low}, mid = ${mid}, high = ${high}`);
  }
}

const nums = [2, 0, 2, 1, 1, 0];
// Output: [0,0,1,1,2,2]

// Input: nums = [2,0,1]
// Output: [0,1,2]

sortColors(nums);
console.log('nums:', nums);

// ============================
// 반복횟수 1: nums[mid]=2 → swap(mid, high)
// 결과: [1, 0, 2], low=0, mid=0, high=1

// 반복횟수 2: nums[mid]=1 → mid++
// 결과: [1, 0, 2], low=0, mid=1, high=1

// 반복횟수 3: nums[mid]=0 → swap(mid, low), low++, mid++
// 결과: [0, 1, 2], low=1, mid=2, high=1 (종료 조건 mid > high)
