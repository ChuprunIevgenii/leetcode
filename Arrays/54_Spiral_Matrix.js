//https://leetcode.com/problems/spiral-matrix/description/

//Given an m x n matrix, return all elements of the matrix in spiral order.

//Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
//Output: [1,2,3,6,9,8,7,4,5]

//Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
//Output: [1,2,3,4,8,12,11,10,9,5,6,7]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

function spiralOrder(matrix) {
    let result = [];
    let columns = matrix[0].length;
    let rows = matrix.length;
    let matrixSize = rows * columns;
    let top = left = 0;
    let right = columns - 1;
    let bottom = rows - 1;


    while(result.length < matrixSize) {
        for(let i = left; i <= right; i++) {
            result.push( matrix[top][i]);
        }
        top +=1;


        for(let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right -=1;
        
        if (result.length >= matrixSize) break;
        
        for(let i = right; i >= left; i--) {
            result.push(matrix[bottom][i]);
        }
        bottom -=1;
        
        if (result.length >= matrixSize) break;

        for(let i = bottom; i >= top; i--) {
            result.push(matrix[i][left]);
        }
        left +=1;

    }

    return result; 
};

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

console.log(spiralOrder(matrix));
