/**
 * 46. Permutations
 * 
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 * 
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * Example 2:
 * Input: nums = [0,1]
 * Output: [[0,1],[1,0]]
 * 
 * Example 3:
 * Input: nums = [1]
 * Output: [[1]]
 */


function permute(nums) {
    const result = [];

    backtracking(nums);

    return result;

    function backtracking(numbers, temp = []) {

        if(temp.length === nums.length) {
            return result.push([...temp]);
        }

        for(let i = 0; i < numbers.length; i++) {
            let current = numbers[i];
            temp.push(current);

            const nextNums = numbers.filter((current, index) => i !== index);

            backtracking(nextNums, temp);

            temp.pop(current);



        }
    }
}


