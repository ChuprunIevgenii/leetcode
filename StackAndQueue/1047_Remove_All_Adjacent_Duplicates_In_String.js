/**
 * @param {string} s
 * @return {string}
 */

//https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
//Input: s = "abbaca"
//Output: "ca"

function removeDuplicates(s) {
    if(s.length < 1 || s.length > Math.pow(10, 5)) return;
    const stack = [];
    
    for(let letter of s) {
        if(stack[stack.length - 1] === letter) {
            stack.pop();
        } else {
            stack.push(letter);
        }
    }

    return stack.join('');
};

console.log(removeDuplicates("azxxzyty"));