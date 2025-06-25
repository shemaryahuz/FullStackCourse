// First and Last elements

const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

function firstAndLast(arr){
    return arr.filter((element, index) => (index === 0 || index === arr.length - 1) && typeof element === 'string');
}

console.log('Array:', arr);
console.log('First and Last:', firstAndLast(arr));
