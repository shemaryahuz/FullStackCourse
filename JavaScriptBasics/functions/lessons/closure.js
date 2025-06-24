// Greet closure function

function greet(name){
    return function (message){
        console.log(`${message} ${name}!`);
    };
}

const greetDavid = greet('David');

greetDavid('Good Morning');


// Closure Calculator

function calculate(_factorNum){
    return {
        setFactorNum: (factorNum) => {
            _factorNum = factorNum;
        },
        getFactorNum: () => _factorNum,
        add: (num) => num + _factorNum,
        sub: (num) => num - _factorNum,
        multiply: (num) => num * _factorNum,
        divide: (num) => num / _factorNum
    }
}

const {add, sub, multiply, divide, getFactorNum, setFactorNum} = calculate(2);


function showCalculations(factor){
    console.log(`Calculations for ${factor}:`);
    for (let i = 1; i <= factor; i++){
        console.log(
            `${i} with ${factor}:\n
            ${i} + ${factor} = ${add(i)}\n
            ${i} - ${factor} = ${sub(i)}\n
            ${i} X ${factor} = ${multiply(i)}\n
            ${i} / ${factor} = ${divide(i)}\n`
        );    
    }
}

showCalculations(getFactorNum())
setFactorNum(3);
showCalculations(getFactorNum())


// 
