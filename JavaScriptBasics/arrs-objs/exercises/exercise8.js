// Mark matrix diagonals

function getMatrix(length){
    let matx = [];
    for (let i = 0; i < length; i++){
        matx.push([]);
        for (let j = 0; j < length; j++){
            matx[i].push('O');
        }
    }
    return matx;
}

function showMatrix(matrix){
    for (row of matrix){
        console.log(row);
    }
}

let matrix = getMatrix(3);

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