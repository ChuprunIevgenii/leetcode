/**
 * Example 1:
 * Input: numCourses = 2, prerequisites = [[1,0]]
 * Output: [0,1]
 * Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
 * 
 * Example 2:
 * Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
 * Output: [0,2,1,3]
 * Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
 * So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
 * 
 * Example 3:
 * Input: numCourses = 1, prerequisites = []
 * Output: [0]
 * 
 * 
 *  3, [[1,0],[1,2],[0,1]]


 */


function findOrder(numCourses, prerequisites) {
    if(numCourses === 1 && !prerequisites.length) return [0];

    const indegrees = new Array(numCourses).fill(0);
    const queue = [];
    const topologicalOrdered = [];

    for(const prereq of prerequisites) {
        const to = prereq[0];
        indegrees[to] += 1;
    }

    for(let course = 0; course < numCourses; course++) {
        if(indegrees[course] === 0) queue.push(course);
    }

    while(queue.length) {
        const ordered = queue.shift();
        topologicalOrdered.push(ordered);


        for(const prereq of prerequisites) {
            const to = prereq[0];
            const from = prereq[1];

            if(from === ordered && indegrees[to] !== 0) {
                indegrees[to] -=1;

                if(indegrees[to] === 0) queue.push(to);
            }
        }
    }

    return topologicalOrdered.length === numCourses ? topologicalOrdered : [];
};