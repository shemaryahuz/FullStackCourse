// Find duplicates in Array

const numbers = [9, 7, 4, 2, 4, 5, 2, 8, 3, 7]


// Solution 1
function findDuplicates(arr){
    const duplicates = [];
    for (let i = 0; i < arr.length; i++){
        for (j = i + 1; j < arr.length; j++){
            if (arr[j] === arr[i]){
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates;
}

console.log(findDuplicates1(numbers)); // [7, 4, 2]
