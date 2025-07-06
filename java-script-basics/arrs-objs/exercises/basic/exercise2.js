// 2D grid count
const grid = [  ['o', 'O', 'X', 'o', 'x'],
                ['x', 'X', 'o', 'O', 'X'],
                ['x', 'x', 'o', 'X', 'O'],
                ['X', 'O', 'x', 'O', 'X'],
                ['O', 'X', 'o', 'O', 'X']]

for (let i = 0; i < grid.length; i++){
    for (let j = 0; j < grid.length; j ++){
        if (grid[i][j] === 'X'){
            console.log(grid[i][j], 'is found at index (', i, ', ', j, ')');
        }
    }
}