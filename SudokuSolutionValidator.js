// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)
//
//     Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.
//
// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.
//
// Examples
// validSolution([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]); // => true
// validSolution([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 0, 3, 4, 8],
//     [1, 0, 0, 3, 4, 2, 5, 6, 0],
//     [8, 5, 9, 7, 6, 1, 0, 2, 0],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 0, 1, 5, 3, 7, 2, 1, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]); // => false

function validSolution(board,step=0,result=[]){
    let sub = []
    if(board.flat(1).some(el=>el===0)){  // check for bad inputs, if here some zeros we don't need to do anything, since already our sudoku squires is invalid.
        return false
    }
    if(step===9){
        return  result.map(el=>el.reduce((a,c)=>a+c,0)).every(el=>el===45)  // out of recursion when our steps reached maximum, and calculate if every our squire have valid numbers.
    }
    for(let i=0;i<board.length;i++){      // iterate on all elements from input array
        let sub2 = []
        for(let j=step;j<step+3;j++){     // and pick only first 3 from element
            sub2.push(board[i][j])
        }
        sub.push(sub2)
        if(i===2||i===5||i===8){          // add every sudoku squire
            result.push(sub.flat(1))
            sub=[]
        }
    }
    step+=3
    return validSolution(board,step,result)  // recursion till we get all squires on our result array

}