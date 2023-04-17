// https://leetcode.com/problems/number-of-provinces/
/*
 * @param {number[][]} isConnected
 * @return {number}
 */

// Input: isConnected = [[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]
// Output: 2

function findCircleNum(arr) {
    if(1 > arr.length > 200) return;
    const connections =  new Array(arr.length).fill(-1);
    let numberOfConnectsions = connections.length;
    for(let i = 0; i < arr.length; i++) {
        const element = arr[i];

        for(j = 0; j < element.length; j++) {
            
            if(j !== i && element[j] && !isConnected(i, j)) {
                const rootI = find(i);
                const rootJ = find(j);
                union(rootI, rootJ);
                numberOfConnectsions--;
            }
        } 
    }
    function union(x, y) {
        if(Math.abs(connections[x]) > Math.abs(connections[y])) {
            connections[y] = x;
            connections[x] -= 1;
        } else {
            connections[x] = y;
            connections[y] -= 1;
        }
    }
    function find(x){
        let foundIndex = x;
        
        while(connections[foundIndex] > -1) {
            foundIndex = connections[foundIndex];
        }
        
        return foundIndex;
    }
    
    function isConnected(x, y) {
        return find(x) === find(y);
    }
    return numberOfConnectsions;
};