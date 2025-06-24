// Flatten matrix into array and remove negatives
function flatten(matrix){
    let arr = [];
    for (row of matrix){
        for (num of row){
            if (num >= 0){
                arr.push(num);
            }
        }
    }
    return arr;
}

const matrix = [
  [ 23, -47,  91, -12,  56],
  [-83,  34, -65,  78, -29],
  [ 42, -19,  87, -54,  16],
  [-71,  95, -38,  63, -84],
  [ 18, -46,  72, -25,  39]
]

console.log('Matrix:', matrix);
console.log('Flatten array:', flatten(matrix));

