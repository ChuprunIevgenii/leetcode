/**
 * @param {number[][]} edges
 * @return {number[]}
 */

//https://leetcode.com/problems/redundant-connection/

// Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
// Output: [1,4]

function findRedundantConnection(edges) {
    if(3 >= edges.length >= 1000) throw new Error('3 <= edges.length <= 1000');
    const UF = new UnionFind(edges.length);
    let redundentConnection = null;

    for (i = 0; i < edges.length; i++) {
        const [x, y] = edges[i];
        const xIndex = x - 1;
        const yIndex = y - 1;
        const rootX = UF.find(xIndex);
        const rootY = UF.find(yIndex);

        if(rootX !== rootY) {
            UF.union(xIndex, yIndex);
        } else {
            redundentConnection = edges[i];
        }

    }

    return redundentConnection;
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