/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (target === nums[i] + nums[j]) {
				return [i, j];
			}
		}
	}
};

console.log('[2, 7, 11, 15], 9: ', twoSum([2, 7, 11, 15], 9));
