/**
 * Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.
 * You must write an algorithm that runs in O(n) time and uses only constant extra space.
 * 
 * Example 1:
 * Input: nums = [4,3,2,7,8,2,3,1]
 * Output: [2,3]
 * 
 * 
 * Example 2:
 * Input: nums = [1,1,2]
 * Output: [1]
 * 
 * Example 3:
 * Input: nums = [1]
 * Output: []
 * 
 * Note: explanation of solving the problem look at the 448_Find_All_Numbers_Disapeard_in_an_Array.js
 */


function findDuplicates(nums) {
    let result = [];
    
    for(let i = 0; i < nums.length; i++) {
        let num2Index = Math.abs(nums[i]) - 1;
        
        if(nums[num2Index] < 0)  result.push(Math.abs(nums[i]));
        else                     nums[num2Index] *= -1;
    }

    return result;
}