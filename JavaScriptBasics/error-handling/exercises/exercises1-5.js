// Exercise 1: Extract numbers

function extractNumbers(arr){
    try{
        return arr.filter((val) => typeof val === "number");
    }
    catch(err){
        console.log(`Error: ${arr} is ${typeof arr}. Error messag: ${err.message}`);
    }
}

const array = [3, true, "hello", 5, "bye", 99, -8, false]
const numbers = extractNumbers(array);

console.log("Array", array); // [3, true, "hello", 5, "bye", 99, -8, false]
console.log("Numbers", numbers); // [3, 5, 99, -8]

const str = "Hello";
const error = extractNumbers(str); // Error: Hello a is string. Error message: arr.filter is not a function

// Exercise 2 : sum numbers safe  

function sumNumbersSafe(arr){
    let sum = 0;
    try{
        const numbers = extractNumbers(arr);
        numbers.forEach((num) => sum += num);
    }
    catch(err){
        console.error(err.message);
    }
    finally{
        return sum;
    }
}

const array2 = ["a", 9, 7, "b", "js", 7, 2, false, 0]
const str2 = "Bad";
console.log(sumNumbersSafe(array2)); // 25
console.log(sumNumbersSafe(str2)); // Cannot read properties of undefined (reading 'forEach')
                                   // 0

// Exercise 3: filter large sums

function filterLargSums(arrList, minTotal){
    try{
        return arrList.filter((arr) => sumNumbersSafe(arr) >= minTotal);
    }
    catch(err){
        console.error(err.message);
    }
}

const array3 = ["hi", 8, 4, "bye", true, 45]
const arrays = [array, array2, array3];
const obj = {name: "avi", age: 45}

console.log(filterLargSums(arrays, 30));
console.log(filterLargSums(obj));

/*
Output:

from line 58:
[
  [ 3, true, 'hello', 5, 'bye', 99, -8, false ],
  [ 'hi', 8, 4, 'bye', true, 45 ]
]

from line 59:
arrList.filter is not a function
undefined
*/


// Exercise 4: 