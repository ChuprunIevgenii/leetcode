// https://leetcode.com/problems/number-of-provinces/
/*
 * @param {number[][]} isConnected
 * @return {number}
 */

// Input: isConnected = [[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]
// Output: 2

function findCircleNum(isConnected) {
    if(1 > isConnected.length > 200) return;
    const connections =  new Array(isConnected.length).fill(-1);
    let numberOfComponents = connections.length;
    
    for(let i = 0; i < isConnected.length; i++) {
        const element = isConnected[i];

        for(j = i + 1; j < element.length; j++) {
            
            if(isConnected[i][j] === 1) {
                const rootI = find(i);
                const rootJ = find(j);
                if(rootI !== rootJ) {
                    union(rootI, rootJ);
                    numberOfComponents--;
                }  
            }
        } 
    }
    function union(x, y) {
        const rootX = find(x);
        const rootY = find(y);
        
        if(connections[rootX] < connections[rootY]) {
            connections[rootY] = rootX;
            connections[rootX] -= 1;
        } else {
            connections[rootX] = rootY;
            connections[rootY] -= 1;
        }
    }
    function find(x){
        let foundIndex = x;
        
        while(connections[foundIndex] > -1) {
            foundIndex = connections[foundIndex];
        }

        if(connections[x] > -1) {
            connections[x] = foundIndex;
        }

        return foundIndex;
    }
    
    return numberOfComponents;
};