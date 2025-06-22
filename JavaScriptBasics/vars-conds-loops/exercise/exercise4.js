// Count digits in a number

// Solution 1
function countDigits1(num){
    const numStr = String(num);
    return numStr.length;
}

// Solution 2
function countDigits2(num){
    let counter = 1;
    while (num >= 10){
        num = ~~ (num / 10);
        counter++;
    }
    return counter;
}
const number = 10045;
console.log(`Input: ${number}`);
console.log(`Output: ${countDigits1(number)}`);
console.log(`Output: ${countDigits2(number)}`);