//https://leetcode.com/problems/find-the-duplicate-number/description/

/**
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
 * There is only one repeated number in nums, return this repeated number.
 * You must solve the problem without modifying the array nums and uses only constant extra space.
 * 
 * Example 1:
 * Input: nums = [1,3,4,2,2]
 * Output: 2
 * 
 * Example 2:
 * Input: nums = [3,1,3,4,2]
 * Output: 3
 * 
 * Example 3:
 * Input: nums = [3,3,3,3,3]
 * Output: 3
 * 
 * Note: The approach is using Floy's cycle detection algorithm
 * 
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

function findDuplicate(nums) {
    let hare = 0;
    let tortise = 0;

    do {
        hare = nums[nums[hare]];
        tortise = nums[tortise];
    } while (hare !== tortise)

    tortise = 0;

    while(hare !== tortise) {
        hare = nums[hare];
        tortise = nums[tortise];
    }

    return tortise;

};