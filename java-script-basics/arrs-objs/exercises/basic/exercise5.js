// Count types

const mixedArr = [
    42,
    "hello",
    true,
    { name: "Alice", age: 30 },
    null,
    3.14,
    false,
    "world",
    { x: 10, y: 20 },
    -17,
    "",
    true,
    null,
    0,
    "test",
    false,
    {}
];

let numCount = 0;
let strCount = 0;
let boolCount = 0;
let objCount = 0;
let nullCount = 0;

for (val of mixedArr){   
    
    switch (typeof val){
        case 'number':
            numCount++;
            break;
        case 'string':
            strCount++;
            break;
        case 'boolean':
            boolCount++;
            break;
        case 'object':
            if (val === null)
                nullCount++;
            else
                objCount++;
            break;
    }
}

console.log('Types count:');
console.log('Numbers:', numCount);
console.log('Strings:', strCount);
console.log('Booleans:', boolCount);
console.log('Objects:', objCount);
console.log('Nulls:', nullCount);
