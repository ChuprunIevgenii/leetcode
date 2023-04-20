/**
 * @param {number[][]} stones
 * @return {number}
 */

//https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/
//Input: stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
//Output: 5

function removeStones(stones) {
    if(0 > stones.length >= 1000) return;
    const UF = new UnionFind(stones.length);
    let countComponents = stones.length;

    for(let i = 0; i < stones.length; i++) {
        for(let j = i + 1; j < stones.length; j++) {
            if((stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]) && UF.isConnected(i, j)) {
                UF.union(i, j);
                countComponents--;
            }
        }
    }
    return stones.length - countComponents;
};

class UnionFind {
    constructor(size) {
        this.connections = new Array(size).fill(-1);
    }
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        
        if(this.connections[rootX] < this.connections[rootY]) {
            this.connections[rootY] = rootX;
            this.connections[rootX] -= 1;
        } else {
            this.connections[rootX] = rootY;
            this.connections[rootY] -= 1;
        }
    }
    find(x) {
        let foundIndex = x;

        while(this.connections[foundIndex] > -1) {
            foundIndex = this.connections[foundIndex]
        }

        if(this.connections[x] > -1) { //pass compression
            this.connections[x] = foundIndex;
        }

        return foundIndex;
    }
    isConnected(x, y) {
        return this.find(x) === this.find(y);
    }
}
