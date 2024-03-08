//https://leetcode.com/problems/max-consecutive-ones/description/

/**
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

function findMaxConsecutiveOnes(nums) {
    let max = 0;
    let tempMax = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            tempMax++;
        } else {
            if(tempMax > max) {
                max = tempMax;
            }

            tempMax = 0;
        }
    }

    return Math.max(max, tempMax)
};


console.log(findMaxConsecutiveOnes([1,0,1,1,0,1,1,1]));