// Double numbers array
const numbers = [1, 2, 3, 4, 5];

function doubleValues(arr){
    return arr.map(num => num * 2);
}

console.log('Numbers:', numbers);
console.log('Doubled numbers:', doubleValues(numbers));
