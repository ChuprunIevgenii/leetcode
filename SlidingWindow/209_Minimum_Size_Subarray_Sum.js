/**
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray
 * whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
 * 
 * Example 1:
 * Input: target = 7, nums = [2,3,1,2,4,3]
 * Output: 2
 * Explanation: The subarray [4,3] has the minimal length under the problem constraint.
 * 
 * 
 * Example 2:
 * Input: target = 4, nums = [1,4,4]
 * Output: 1
 * 
 * Example 3:
 * Input: target = 11, nums = [1,1,1,1,1,1,1,1]
 * Output: 0
 */


/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

function minSubArrayLen(target, nums) {
    let max = Infinity;
    let left = 0;
    let total = 0;

    for(let right = 0; right < nums.length; right++) {
        total += nums[right];

        while(total >= target) {
            max = Math.min(max, right - left + 1);

            total -= nums[left];
            left++;
        }
    }

    return max === Infinity ? 0 : max;
};


console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]))