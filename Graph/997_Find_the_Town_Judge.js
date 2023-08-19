//https://leetcode.com/problems/find-the-town-judge/
/**
 * Example 1:

Input: n = 2, trust = [[1,2]]
Output: 2
Example 2:

Input: n = 3, trust = [[1,3],[2,3]]
Output: 3
Example 3:

Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1

Input: [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: -1

[[1,2],[3,2],[1,3],[4,1],[3,1],[2,1],[2,3],[4,3],[4,2],[3,4],[2,4]]


Notes: it is possible to solve this issue thru tracking indegrees and out degrees
 */
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
function findJudge(n, trust) {
    if(n === 1) return 1;

    const potentialJudges = new Set();
    const citizens = new Set();
    
    trust.forEach(t =>{
        const citizen = t[0];
        const judge = t[1];
        
        citizens.add(citizen);
        
        if(potentialJudges.has(citizen)) {
            potentialJudges.delete(citizen);
        } else if(!citizens.has(judge)) {
            potentialJudges.add(judge)
        }
    });
    
    return potentialJudges.size === 1 ? Array.from(potentialJudges)[0] : -1;
};
