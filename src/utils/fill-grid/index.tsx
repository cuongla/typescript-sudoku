import { IGrid, NUMBERS } from 'typings';
import shuffle from '../shuffle';

const grid: IGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

// declare numbers
const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * A backtracking/recursive function to check all the possible combinations of numbers a solution is found
 * @param grid  9X9 Sudoku Grid
 */
function fillGrid(grid: IGrid) {
    // define row & col
    let row = 0;
    let col = 0;

    // 9 row x 9 col = 81
    for (let i = 0; i < 81; i++) {
        row = Math.floor(i / 9)
        col = i % 9

        if (grid[row][col] === 0) {
            shuffle(numbers)
            // Do stuff
            // recursive things
            break
        }
    }

    grid[row][col] = 0
}

export default fillGrid;