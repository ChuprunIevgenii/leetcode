/**
 * @param {string[]} operations
 * @return {number}
 */

//https://leetcode.com/problems/baseball-game/
//Input: ops = ["5","2","C","D","+"]
//Output: 30

function calPoints(operations) {
    if(1 >= operations.length >= 1000) throw new Error('Operaation must be 1 <= operations.length <= 1000');
    let stack = [];

    for(i = 0; i < operations.length; i++) {
        const operator = operations[i];

        if (operator === '+' && stack.length > 1) {
            const next = stack[stack.length - 1] + stack[stack.length - 2];
            stack.push(next);
        } else if (operator === 'D' && stack.length >= 1) {
            const next = stack[stack.length - 1] * 2;
            stack.push(next);
        } else if (operator === 'C' && stack.length >= 1) {
            stack.pop();
        } else {
            stack.push(Number(operator));
        }
    }
    
    return stack.reduce((acc, current) => acc+=current, 0);
};