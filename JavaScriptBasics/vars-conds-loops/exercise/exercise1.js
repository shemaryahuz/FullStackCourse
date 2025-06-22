// Sum all digits of 5 digits number

// Solution 1
function sumDidits1(num){
    let numStr = String(num);
    let sum = 0;
    for (const char of numStr){
        sum += Number(char);
    }
    return sum;
}

// Solution 2
function sumDidits2(num){
    let sum = num % 10;
    while (num >= 10){
        num = ~~ (num / 10);
        sum += num % 10;
    }
    return sum;
}

let num = 58423;
console.log(sumDidits1(num));
console.log(sumDidits2(num));