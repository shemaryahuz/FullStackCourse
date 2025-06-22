// Reverse number's digits

// Solution 1
function reverseDigits1(num){
    const numStr = String(num);
    let reversed = '';
    for (let i = numStr.length; i > 0; i--){
        reversed += i;
    }
    return reversed;
}

// Solution 2
function reverseDigits2(num){
    let reversed = '';
    while (num >= 10){
        rightDigit = String(num % 10)
        reversed += String(num % 10);
        num = ~~(num / 10);
    }
    reversed += String(num % 10);
    return reversed;
}

const number = 1234;
console.log(`Input: ${number}`);
console.log(`Output: ${reverseDigits1(number)}`)
console.log(`Output: ${reverseDigits2(number)}`)