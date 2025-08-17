// Reverse an array

function reverse(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i-- ) {
        reversed.push(arr[i]);
    }
    return reversed;
}

const array = [1, 2, 3, 4, 5];
console.log(`Reversed: ${reverse(array)}`);