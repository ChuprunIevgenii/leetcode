/**
 * Example 1
 * Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
 * Output: [2,4,5,6]
 * Explanation: The given graph is shown above.
 * Nodes 5 and 6 are terminal nodes as there are no outgoing edges from either of them.
 * Every path starting at nodes 2, 4, 5, and 6 all lead to either node 5 or 6.
 * 
 * Example 2:
 * Input: graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]]
 * Output: [4]
 * Explanation:
 * Only node 4 is a terminal node, and every path starting at node 4 leads to node 4.
 * 
 * [[],[0,2,3,4],[3],[4],[]] => [0, 1, 2, 3, 4]
 */

const STATUSES = {
    VISITED: 'visited',
    SAFE: 'safe'
};

var eventualSafeNodes = function(graph) {
    const result = [];
    const visited = {};

    for(let node = 0; node < graph.length; node++) {
        if(isSafe(node)) result.push(node);
    }

    return result;

    function isSafe(node) {
        if(visited[node] === STATUSES.SAFE) return true;
        if(visited[node] === STATUSES.VISITED) return false;

        visited[node] = STATUSES.VISITED;

        for(let i = 0; i < graph[node].length; i++) {
            if(!isSafe(graph[node][i])) return false;
        }

        visited[node] = STATUSES.SAFE;
        return true;
    }
};


console.log(eventualSafeNodes([[1,2,3,4],[1,2],[3,4],[0,4],[]]));