// Collatz sequence

function collatz(num){
    while (num > 1){
        if (num % 2 === 0){
            console.log('Number is even.');
            console.log('Number', '=', num, '/ 2 =', num / 2);
            num /= 2;
        }
        else {
            console.log('Number is odd.');
            console.log('Number', '=', num, 'X 3 + 1 =', num * 3 + 1);
            num = num * 3 + 1;
        }
    }
    console.log('Colatz stoped! number =', num);
}

collatz(15);