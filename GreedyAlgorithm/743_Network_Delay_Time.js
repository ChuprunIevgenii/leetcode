/**
 * https://leetcode.com/problems/network-delay-time/
 * 
 * Example 1
 * Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
 * Output: 2
 * 
 * Example 2:
 * Input: times = [[1,2,1]], n = 2, k = 1
 * Output: 1
 * 
 * Example 3:
 * Input: times = [[1,2,1]], n = 2, k = 2
 * Output: -1
 * 
 * 
 */


/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */


function networkDelayTime(times, numberOfNodes, startNode) {
    

    for(let i = 1; i <= numberOfNodes; i++) {
        listOfNodes[i] = i === startNode ? 0 : Infinity;
    }

    for(let i = 0; i < numberOfNodes; i++) {
        times.forEach(t => {
            const [ from, to, time ] = t;
            const nextTime = listOfNodes[from] + time;
            
            if(listOfNodes[to] === Infinity) {
                listOfNodes[to] = nextTime;
            } else if(listOfNodes[to] && nextTime < listOfNodes[to]) {
                listOfNodes[to] = nextTime;
            } 
        });
    }

    for(const key in listOfNodes) {
        const value = listOfNodes[key];
        if(value === Infinity) return -1;
        if(value > minTime) minTime = value;
    }

    return minTime;
};


console.log(networkDelayTime([[1,2,1],[2,3,7],[1,3,4],[2,1,2]], 3, 2));