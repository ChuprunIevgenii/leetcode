// https://leetcode.com/problems/valid-mountain-array/description/


/**
 * @param {number[]} arr
 * @return {boolean}
 */

function validMountainArray(arr) {
    if(arr.length < 3) return false;
    
    let isUp = true;

    for (let i = 0; i < arr.length - 1; i++) {
        let j = i + 1;
        let k = j + 1;

        if(
            (isUp && arr[i] >= arr[j]) ||
            (!isUp && arr[i] <= arr[j]) ||
            (isUp && !arr[k])
        ) {
            return false;
        }
        
        if(isUp && arr[k] < arr[j]) isUp = !isUp;
    }

    return true;
};