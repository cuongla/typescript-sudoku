import { IGrid } from 'typings';
import { getRandomIndex, copyGrid, solveGrid } from 'utils';
import global from 'global';

/**
 * Remove numbers from a full grid to create a Sudoku puzzle
 * @param grid 9x9 Sudoku Grid
 * @param attemps number of attempts to solve
 */
function removeNumbers(grid: IGrid, attempts = 5): IGrid {
    while (attempts > 0) {
        let row = getRandomIndex();
        let col = getRandomIndex();

        while (grid[row][col] === 0) {
            row = getRandomIndex()
            col = getRandomIndex()
        }

        const backup = grid[row][col]
        grid[row][col] = 0;

        const gridCopy = copyGrid(grid);
        global.counter = 0;
        solveGrid(gridCopy)

        if (global.counter !== 1) {
            grid[row][col] = backup;
            attempts--;
        }
    }
    return grid;
}

export default removeNumbers;