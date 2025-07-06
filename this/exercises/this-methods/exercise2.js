function sumNumbers(a, b, c) {
    return a + b + c;
}

const arr = [2, 4, 6]

const res = sumNumbers.apply(null, arr);

console.log(res); // 
