// Object of evens and odds

const numbers = {
    odd: [],
    even: []
}

let uniqueCount = 0;
let uniqueArr = [];
for (let i = 1; i <= 50; i++){
    if (i % 2 === 0){
        numbers['even'].push(i);
        if (i % 3 === 0){
            uniqueArr.push(i);
            uniqueCount++;
        }
    }
    else{
        numbers['odd'].push(i);
    }
}

console.log(
    'Numbers from 1 to 50:\n',
    'Even numbers:', numbers['even'], '\n',
    'Odd numbers:', numbers['odd'], '\n',
    'Count of numbers that divided by 2 and 3:', uniqueCount, '\n',
    'Numbers that divided by 2 and 3:', uniqueArr
);