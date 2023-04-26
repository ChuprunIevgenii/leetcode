/**
 * @param {string} s
 * @return {string}
 */
//https://leetcode.com/problems/remove-outermost-parentheses/
//Input: s = "(()())(())"
//Output: "()()()"

function removeOuterParentheses(s) {
    if(s.length < 1 || s.length > Math.pow(10, 5)) return;

    let next = '';
    let stack = [];
    let isOpen = false;
    
    for(let i = 0; i < s.length; i++) {
        if(isOpen && !stack.length && s[i] === ')') {
            isOpen = false;
            continue;
        }
        
        if(!isOpen && !stack.length && s[i] === '(') {
            isOpen = true;
            continue;
        }
        
        if(s[i] === '(') {
            stack.push(s[i])
        } else {
            stack.pop();
        }
        next += s[i];
    }

    return next;
};

//code without stack with better perfomance
function removeOuterParenthese1(S) {
    let parenthesCount = 0;
    let result = "";
    
    for (const letter of S) {
        if (letter === "(") {
            if (parenthesCount) {
                result += letter;
            }
            parenthesCount++;
        } else {
            parenthesCount--;
            if (parenthesCount) {
                result += letter;
            }
        }
    }
    
    return result;
};
