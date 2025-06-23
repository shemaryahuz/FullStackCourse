// Mark matrix diagonals

function getMatrix(length){
    return []
}

function showMatrix(matrix){
    for (row of matrix){
        console.log(row);
    }
}

let matrix = [ ['A', 'B', 'C'],
               ['D', 'E', 'F'],
               ['G', 'H', 'I'] 
            ];

console.log('Matrix:');
showMatrix(matrix);

for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix.length; j++){
        if (j === i || j === matrix.length - 1 - i){
            matrix[i][j] = '#'
        }
    }
}
console.log('Marked matrfix:');
showMatrix(matrix);