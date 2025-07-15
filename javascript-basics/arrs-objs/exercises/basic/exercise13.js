// Match arrays

function countMatchElements(a, b){
    let counter = 0;
    for (element of a){
        if (b.includes(element)){
            counter++;
        }
    }
    return counter;
}

const arr1 = [42, "apple", true, -17, "hello", 3.14, false, "cat"];
const arr2 = ["hello", 88, false, "dog", 42, "banana", true, -5];

console.log('Array 1:', arr1);
console.log('Array 2:', arr2);
console.log('Match count:', countMatchElements(arr1, arr2));
