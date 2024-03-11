/**
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 * 
 * 
 * Example 1:
 * 
 * Input: nums = [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 * Explanation: After squaring, the array becomes [16,1,0,9,100].
 * After sorting, it becomes [0,1,9,16,100].
 * 
 * Example 2:
 * Input: nums = [-7,-3,2,3,11]
 * Output: [4,9,9,49,121]
 * 
 * Note: for solving this problem, we need to create a brand new array(size of the input array) and use two pointer techinque.
 * 
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */

function sortedSquares(nums) {
    let result = new Array(nums.length);
    let left = 0;
    let right = index = nums.length - 1;

    while(left <= right) {
        let leftS = Math.pow(nums[left], 2);
        let rightS = Math.pow(nums[right], 2);
        
        if(leftS < rightS) {
            result[index] = rightS;
            right--;
        } else {
            result[index] = leftS;
            left++;
        }

        index--;
    }

    return result;

};