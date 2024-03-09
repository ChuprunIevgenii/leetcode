//https://leetcode.com/problems/merge-sorted-array/description/

/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * 
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * 
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
 * To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 * 
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    let k = 0;
    let copyNums1 = nums1.slice(0, m);

    while(i < m && j < n) {
        if(copyNums1[i] > nums2[j]) {
            nums1[k] = nums2[j];
            j++;
        } else if(copyNums1[i] <= nums2[j]) {
            nums1[k] = copyNums1[i];
            i++;
        }

        k++;
    }
   
    for(; i < m; i++) {
        nums1[k] = copyNums1[i];
        k++;
    }

    for(; j < n; j++) {
        nums1[k] = nums2[j];
        k++;
    }

    return nums1;
};