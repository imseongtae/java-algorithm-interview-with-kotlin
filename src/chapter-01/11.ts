// 238. Product of Array Except Self
function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [];
  const left: number[] = [];
  const right: number[] = [];

  // 왼쪽 곱 배열(left product)
  left[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }
  console.log('left:', left);

  // 오른쪽 곱 배열(right product)
  right[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }
  console.log('right:', right);

  for (let i = 0; i < nums.length; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
}

// 공간 복잡도 최적화한 고급 버전
function productExceptSelf1(nums: number[]): number[] {
  const result: number[] = new Array(nums.length).fill(1) as number[];
  let left = 1;
  let right = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] *= left;
    left *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }

  return result;
}

// Input
const nums = [1, 2, 3, 4];
// Output: [24,12,8,6]

console.log('productExceptSelf():', productExceptSelf(nums));
console.log('productExceptSelf1():', productExceptSelf1(nums));
