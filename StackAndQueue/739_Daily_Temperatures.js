/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

//https://leetcode.com/problems/daily-temperatures
//Input: temperatures = [73,74,75,71,69,72,76,73]
//Output: [1,1,4,2,1,1,0,0]

function dailyTemperatures(temperatures) {
    if(temperatures.length < 1 || temperatures.length > Math.pow(10, 5)) return;
    const stack = [];
    
    for(i = 0; i < temperatures.length; i++) {

        while(stack.length && temperatures[i] > stack[stack.length - 1].value) {
            const item = stack.pop();
            temperatures[item.index] = i - item.index;
        }

        stack.push({ index: i, value: temperatures[i] });
    }

    while(stack.length) {
        const item = stack.pop();
        temperatures[item.index] = 0;
    }

    return temperatures;
};
