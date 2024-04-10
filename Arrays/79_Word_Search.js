//https://leetcode.com/problems/word-search/description/

/**
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * 
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
 * 
 * Example 1:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * Output: true
 * 
 * Example 2:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
 * Output: true
 * 
 * Example 3:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
 * Output: false
 */


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
    const top = 0;
    const left = 0;
    const right = board[0].length - 1;
    const bottom = board.length - 1;
    
    for (let row = 0; row < board.length; row++) {
        for(let column = 0; column < board[0].length; column++) {
            if(dfs(row, column)) return true;
        }
    }

    return false;

    function dfs(row, column, index = 0) {
        if(
            row < top || 
            row > bottom || 
            column < left || 
            column > right || 
            board[row][column] !== word[index] || 
            (visited[row] &&  visited[row][column])
        ) return false;

        index++;

        dfs(row - 1, column, index);
        dfs(row + 1, column, index);
        dfs(row, column - 1, index);
        dfs(row, column + 1, index);
        
    }
};

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
let word = "ABCCED";

console.log(exist(board, word));