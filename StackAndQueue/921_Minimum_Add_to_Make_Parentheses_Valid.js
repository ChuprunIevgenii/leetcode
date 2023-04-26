/**
 * @param {string} s
 * @return {number}
 */
//https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
//Input: s = "()))"
//Output: 3

 function minAddToMakeValid(s) {
    if(s.length < 1 || s.length > 1000) return;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if(stack.length && stack[stack.length - 1] === '(' && s[i] === ')') {
            stack.pop()
        } else {
            stack.push(s[i]);
        }
    }

    return stack.length;
};