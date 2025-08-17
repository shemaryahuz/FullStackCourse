// 2D Grid count

function countMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] === "X") {
                console.log(`(${i + 1}, ${j + 1})`);
            }
        }
    }
}

const grid = [
    ["e", "b", "X", "f", "x"],
    ["X", "l", "c", "i", "X"],
    ["j", "o", "e", "X", "O"],
    ["w", "q", "Q", "k", "p"],
    ["e", "X", "X", "x", "P"]
]

countMatrix(grid);