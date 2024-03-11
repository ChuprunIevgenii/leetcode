/**
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
 * 
 * Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
 * 
 * Example 1:
 * Input: nums = [4,3,2,7,8,2,3,1]
 * Output: [5,6]
 * 
 * Example 2:
 * Input: nums = [1,1]
 * Output: [2]
 * 
 * Note: to solve this problem, firstly what comes in mind is to use Object or Map as a storage to check if the number exists within the array.
 * However it uses addirional space - O(n).
 * 
 * Better sollution is to go through array and check if the number has refference from the other numbers. If it is the case we mark it as negative.
 * Otherwise, if the number remains positive it means these numbsers do not appear in the array.
 * [4,3,2,7,8,2,3,1]
 * 
 * 4 is reffering to 7 => mark seven as negative -7
 * 3 is reffering to 2 => -2
 * 2 is reffering to 3 => -3
 * 7 is reffering to 3 on 7th position => -3
 * 8 to 1 => -1
 * 2 and 3 already negative.
 * 1 to 4 => -4;
 * 
 * Result: [-4,-3,-2,-7,8,2,-3,-1]l
 * 
 * 8 is positive which is on 5th position
 * 2 is positive which is on 6th position
 * 
 * Final Result: [5, 6]
 * 
 * 
 * 
 */

function findDisappearedNumbers(nums) {
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        let r2i = Math.abs(nums[i]) - 1;

        if(nums[r2i] > 0) nums[r2i] = -Math.abs(nums[r2i]);
    }

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) result.push(i + 1);
    }

    return result;

};