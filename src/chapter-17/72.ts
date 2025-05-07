function intersection(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  for (const num of set1) {
    if (set2.has(num)) {
      result.push(num);
    }
  }

  return result;
}

// const nums1 = [1, 2, 2, 1];
// const nums2 = [2, 2];
// Output: [2]

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];
// Output: [9,4]

console.log('nums1:', nums1);
console.log('nums2:', nums2);
console.log('intersection:', intersection(nums1, nums2));
