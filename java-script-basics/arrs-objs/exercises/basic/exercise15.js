// Create matrix and mark rows and columns

// Requirements: 1 where row === column, 9 in row 2, otthers - 0. 

function createMatrix(length){
    let matrix = [];
    for (let i = 0; i < length; i++){
        matrix.push([]);
        for (let j = 0; j < length; j++){
            if (i === 1){
                matrix[i].push(9);
            }
            else if (j === i){
                matrix[i].push(1);
            }
            else{
                matrix[i].push(0);
            }
        }
    }
    return matrix;
}

console.log('Matrix:', createMatrix(5));
