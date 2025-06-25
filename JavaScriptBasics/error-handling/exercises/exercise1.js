// Extract numbers

function extractNumbers(arr){
    try{
        return arr.filter((val) => typeof val === "number");
    }
    catch(err){
        console.log(`Error: ${arr} is ${typeof arr} and ${err.message}`);
    }
}

const array = [3, true, "hello", 5, "bye", 99, -8, false]
const numbers = extractNumbers(array);

console.log("Array", array); // [3, true, "hello", 5, "bye", 99, -8, false]
console.log("Numbers", numbers); // [3, 5, 99, -8]


const str = "Hello";
const error = extractNumbers(str); // Error: Hello a is string and arr.filter is not a function
