/**
 * Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
 * Return the sum of the three integers.
 * You may assume that each input would have exactly one solution.
 * 
 * 
 * Example 1:
 * Input: nums = [-1,2,1,-4], target = 1
 * Output: 2
 * Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * 
 * 
 * Example 2:
 * Input: nums = [0,0,0], target = 1
 * Output: 0
 * Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 * 
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


 function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    
    let sumClosest;
    
    for(let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            
            if(sum === target) return target;
            else if(Math.abs(target - sumClosest) > Math.abs(target - sum)) sumClosest = sum;
            else if(!sumClosest) sumClosest = sum;

            if(sum < target) j++;
            else k--;
        }
    }

    return sumClosest;
    
};


console.log(threeSumClosest([-1,2,1,-4], 1))