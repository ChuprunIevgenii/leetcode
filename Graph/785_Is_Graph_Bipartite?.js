/**
 * //https://leetcode.com/problems/is-graph-bipartite/
 * 
 * 
 * Example 1:
 * Input: graph = [[1,2,3],[0,2],[0,1,3],[0,2]]
 * Output: false
 * Explanation: There is no way to partition the nodes into two independent sets such that every edge connects a node in one and a node in the other.
 * 
 * 
 * Example 2:
 * Input: graph = [[1,3],[0,2],[1,3],[0,2]]
 * Output: true
 * Explanation: We can partition the nodes into two sets: {0, 2} and {1, 3}.
 * 
 * [[1,2,3],[0,2],[0,1,3],[0,2]]
 * [[2,3,5,6,7,8,9],[2,3,4,5,6,7,8,9],[0,1,3,4,5,6,7,8,9],[0,1,2,4,5,6,7,8,9],[1,2,3,6,9],[0,1,2,3,7,8,9],[0,1,2,3,4,7,8,9],[0,1,2,3,5,6,8,9],[0,1,2,3,5,6,7],[0,1,2,3,4,5,6,7]]
 * [[4],[],[4],[4],[0,2,3]] 
*/

function isBipartite(graph) {
    if(!graph.length) return false;

    const nodeColors = new Array(graph.length).fill(-1);
    const queue = [];
    
    for(let i = 0; i < graph.length; i++) {
        if(nodeColors[i] === -1) { //unvisited
            queue.push(i);

            while(queue.length) {
                const current = queue.shift();
                const neighbours = graph[current];
                
                for(neighbour of neighbours) {
                    if(nodeColors[neighbour] === -1) { //unvisited
                        queue.push(neighbour);
                        nodeColors[neighbour] = nodeColors[current] === 1 ? 2 : 1;
                    } else if (nodeColors[neighbour] === nodeColors[current]) {
                        return false;
                    }
                }
            }
        }
    }

    return true;
       
};

console.log(isBipartite([[4],[],[4],[4],[0,2,3]] ))