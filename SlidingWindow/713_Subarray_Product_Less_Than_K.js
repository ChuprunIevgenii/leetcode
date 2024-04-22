/**
 * Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.
 * 
 * Example 1:
 * Input: nums = [10,5,2,6,7], k = 100
 * Output: 8
 * Explanation: The 8 subarrays that have product less than 100 are:
 * [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
 * 
 * Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
 * 
 * 
 * Example 2:
 * Input: nums =≈ k = 0
 * Output: 0
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function numSubarrayProductLessThanK(nums, k) {
    if(k <= 1) return 0;
    
    let counter = 0;
    let total = 1;
    let left = 0;

    for(let right = 0; right < nums.length; right++){
        total *= nums[right];        

        while(total >= k) {
            total /= nums[left];
            left++;
        }

        
        counter += right - left + 1;
    }

    return counter;
};
