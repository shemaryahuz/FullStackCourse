const calculator = {
    multiply(x, y) {
        return x * y;
    }
};

function add10(num){
    return num + 10;
}
const res = add10.call(null, calculator.multiply.call(calculator, 4, 5));

console.log(res); // 30
