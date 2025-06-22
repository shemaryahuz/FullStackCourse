// Print multiplation table of a number

function printMultyTable(num){
    console.log(`Multiplation table of ${num}:`)
    for (let i = 1; i <= 10; i++){
        console.log(`${num} X ${i} = ${num * i}`);
    }
}
const number = 4;
console.log(`Input: ${number}`);
console.log(`Output:`);
printMultyTable(number);