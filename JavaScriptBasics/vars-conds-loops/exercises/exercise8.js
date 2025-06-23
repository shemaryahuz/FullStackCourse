// Detect if a number is a palindrome

function isPalindrome(num){
    const numStr = String(num);
    let reversed = '';
    for (let i = numStr.length - 1; i >= 0; i--){
        reversed += numStr[i];
    }
    return numStr == reversed;
}

const number = 123;
console.log(`Input: ${number}`);
console.log(`Output: ${isPalindrome(number)? 'Palindrom' : 'Not a Palindrome'}`)