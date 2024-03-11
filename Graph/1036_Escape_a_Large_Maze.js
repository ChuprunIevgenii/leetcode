/**
 * Example 1:
 * Input: blocked = [[0,1],[1,0]], source = [0,0], target = [0,2]
 * Output: false
 * Explanation: The target square is inaccessible starting from the source square because we cannot move.
 * We cannot move north or east because those squares are blocked.
 * We cannot move south or west because we cannot go outside of the grid.
 * 
 * Example 2:
 * Input: blocked = [], source = [0,0], target = [999999,999999]
 * Output: true
 * Explanation: Because there are no blocked cells, it is possible to reach the target square.
 */


/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
function isEscapePossible(blocked, source, target) {
    const MAX = Math.pow(10, 6);
    const MIN = 0;

    const dR = [-1, +1, 0, 0]; // rows directions: [north, south, east, west]
    const dC = [0, 0, +1, -1]; // columns directions: [north, south, east, west]

    const blockers = blocked.reduce((map, [x, y]) => map.set(`${x}-${y}`, true), new Map());

    const LIMIT = blocked.length;

    function bfs([ sR, sC ], [ tR, tC ]) {

        const qR = []; // queue rows
        const qC = []; // queue columns

        const visited = new Map();

        qR.push(sR);
        qC.push(sC);
        
        while(qR.length !== 0) {
            const cR = qR.shift(); // current row
            const cC = qC.shift(); // current column
            
            if(tR === cR && tC === cC) return true;
    
            if ((Math.abs(sR - cR) + Math.abs(sC - cC)) > LIMIT) {
                return true;
            } 
            
            for(let i = 0; i < 4; i++) {
                const nR = cR + dR[i];
                const nC = cC + dC[i];
    
                if(nR < MIN || nR >= MAX) continue;
                if(nC < MIN || nC >= MAX) continue;
                
                const cell = `${nR}-${nC}`;

                if(visited.has(cell) || blockers.has(cell)) continue;
    
                qR.push(nR);
                qC.push(nC);
                
                visited.set(cell, true);
            }
        }

        return false;
    }
    
    return bfs(source, target) && bfs(target, source);
};