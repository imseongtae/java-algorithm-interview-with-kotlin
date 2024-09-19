/**
 * 최소값을 반환하는 함수
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const min = (a, b) => {
	return a < b ? a : b;
};

console.log('1, 2: ', min(1, 2));
console.log('3, 3: ', min(3, 3));

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
	let maxSum = 0;
	//
	// 배열을 오름차순으로 정렬
	nums.sort((a, b) => a - b);
	// return Math.min(...nums);

	for (let i = 0; i < nums.length; i += 2) {
		maxSum += nums[i];
	}

	return maxSum;
};

console.log('[1, 4, 3, 2]: ', arrayPairSum([1, 4, 3, 2]));
