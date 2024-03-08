//https://leetcode.com/problems/move-zeroes/

/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 * 
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * 
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 * 
 * Example 3:
 * Input: nums = [0,0,1]
 * Output: [1,0,0]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


function moveZeroes(nums) {
    let zeroCounter = 0;
    let i = 0;
    
    while(i < nums.length - zeroCounter) {
        if(nums[i] !== 0) {
            i++;
        } else {
            nums.push(...nums.splice(i, 1));
            zeroCounter++;
        }  
    }

    return nums;
};


//two pointers solution

function moveZeroesTwoPointers(nums) {
    let writer = 0;
    
    for(let reader = 0; reader < nums.length; reader++) {
        if(nums[reader] !== 0) {
            nums[writer] = nums[reader];
            writer++;
        }
    }

    while (writer < nums.length) {
        nums[writer] = 0;
        writer ++;
    }

    return nums;
};