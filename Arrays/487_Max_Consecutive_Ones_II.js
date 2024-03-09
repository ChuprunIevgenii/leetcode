//https://leetcode.com/problems/max-consecutive-ones-ii/description/

/**
 * 
 * Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one 0.
 * 
 * 
 * Example 1:
 * Input: nums = [1,0,1,1,0]
 * 
 * Output: 4
 * Explanation: 
 * - If we flip the first zero, nums becomes [1,1,1,1,0] and we have 4 consecutive ones.
 * - If we flip the second zero, nums becomes [1,0,1,1,1] and we have 3 consecutive ones.
 * The max number of consecutive ones is 4.
 * 
 * 
 * Example 2:
 * Input: nums = [1,0,1,1,0,1]
 * 
 * Output: 4
 * 
 * Explanation: 
 * - If we flip the first zero, nums becomes [1,1,1,1,0,1] and we have 4 consecutive ones.
 * - If we flip the second zero, nums becomes [1,0,1,1,1,1] and we have 4 consecutive ones.
 * The max number of consecutive ones is 4.
 * 
 */

function findMaxConsecutiveOnes(nums) {
    let zeroIndex = null;
    let max = 0;
    let tempMax = 0;

    for(let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
        if(nums[currentIndex] === 1) {
            tempMax++;
        } else if(nums[currentIndex] === 0) {
            if(zeroIndex !== null) {
                max = Math.max(max, tempMax);
                tempMax = currentIndex - zeroIndex;
                zeroIndex = currentIndex;
            } else {
                zeroIndex = currentIndex;
                tempMax++;
            }
        }
    }

    return Math.max(max, tempMax);
};


console.log(findMaxConsecutiveOnes(a));