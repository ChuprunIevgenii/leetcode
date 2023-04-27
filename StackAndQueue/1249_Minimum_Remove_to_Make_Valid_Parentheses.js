/**
 * @param {string}
 * @return {string}
 */

//https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
//Input: s = "lee(t(c)o)de)"
//Output: "lee(t(c)o)de"
//Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

function minRemoveToMakeValid(s) {
    const string2array = s.split('');
    const stack = [];
    
    for(let i = 0; i < string2array.length; i++) {
        if(string2array[i] === '(' || string2array[i] === ')') {
            if(stack.length === 0 && string2array[i] === ')') string2array[i] = '';
            else if(stack.length && string2array[i] === ')') stack.pop()
            else stack.push(i);
        };
    }

    for(let i = 0; i < stack.length; i++) {
        delete string2array[stack[i]];
    }
    
    return string2array.join('');
};



console.log(minRemoveToMakeValid('uuu))(('));