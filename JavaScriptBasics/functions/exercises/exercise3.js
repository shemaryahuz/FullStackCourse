// First and Last elements

const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

function firstAndLast(arr){
    return [arr[0], arr[arr.length - 1]];
}

console.log('Array:', arr);
console.log('First and Last:', firstAndLast(arr));
