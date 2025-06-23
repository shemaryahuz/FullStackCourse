// Filter manually

const numbers = [
    5,
    150,
    23,
    234,
    67,
    567,
    89,
    1001,
    12,
    789,
    45,
    345,
    78,
    678,
    1,
    101,
    99,
    999,
    34,
    234,
    56,
    456,
    7,
    107,
    83,
    1234
];

let bigNums = [];
let comprarisionsCount = 0;

for (val of numbers){
    comprarisionsCount++;
    if (val > 100){
        bigNums.push(val);
    }
}

console.log('Numbers greater than 100:', bigNums);
console.log('Comprarisions Count:', comprarisionsCount);

