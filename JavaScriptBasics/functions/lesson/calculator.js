// Anonymous arow functions

const add = (x, y) => x + y;

const sub = (x, y) => x - y;

const mult = (x, y) => x * y;

const divide = (x, y) => x / y;

const num1 = 5;
const num2 = 4;

console.log(num1, '+', num2, '=', add(num1, num2));
console.log(num1, '-', num2, '=', sub(num1, num2));
console.log(num1, 'X', num2, '=', mult(num1, num2));
console.log(num1, '/', num2, '=', divide(num1, num2));

// Call backs function

const multyBy2 = (num) => mult(num, 2);
const sub5 = (callback) => sub(callback, 5);
const divideBy10 = (callback) => divide(callback, 10);

function start(num, multy){
    console.log('Number:', num);
    
    const finalResult = divideBy10(
        sub5(
            multy(num)
        )
    )
    console.log('Final result:', finalResult);
}

start(5, multyBy2);