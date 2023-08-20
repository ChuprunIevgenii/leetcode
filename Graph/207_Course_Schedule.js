//https://leetcode.com/problems/course-schedule/description/
/**
 * 
 * Example 1:
 * Input: numCourses = 2, prerequisites = [[1,0]]
 * Output: true
 * Explanation: There are a total of 2 courses to take. 
 * To take course 1 you should have finished course 0. So it is possible.
 * 
 * Example 2:
 * Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
 * Output: false
 * Explanation: There are a total of 2 courses to take. 
 * To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 * 
 * Example 3: 5, [[1,4],[2,4],[3,1],[3,2]
 */


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

function canFinish(numCourses, prerequisites) {
    if(numCourses === 1) return 1;

    const indegree = new Array(numCourses).fill(0);
    const queue = [];

    for(let i = 0; i < prerequisites.length; i++) {
        const to = prerequisites[i][0];
        indegree[to] = indegree[to] + 1;
    }

    for(let i = 0; i < numCourses; i++) {
        if(indegree[i] === 0) queue.push(i);
    }

    while(queue.length) {
        const removedNode = queue.shift();
        numCourses -= 1;
        for(let i = 0; i < prerequisites.length; i++) {
            const to = prerequisites[i][0];
            const from = prerequisites[i][1];
            
            if(indegree[to] && from === removedNode) {
                indegree[to] = indegree[to] - 1;
                if(indegree[to] === 0) queue.push(to);
            }
        }
    }

    return numCourses === 0;

};