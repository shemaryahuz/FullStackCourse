// Exercise 5: Calculator

function calculator(a, b, operation){
    const operators = ["add", "subtract", "multiply", "divide"];
    try{
        if (typeof a !== typeof b){
            throw new Error(`a is ${typeof a} and b is ${typeof b}. it must be the same type!`);
        }
        else if (!operators.includes(operation)){
            throw new Error(`${operation} is invalid operation. it must be one of those: ${operators}`);
        }
        else{
            switch (operation){
                case "add":
                    return a + b;
                case "subtract":
                    return a - b;
                case "multiply":
                    return a * b;
                case "divide":
                    return a / b;
            }
        }
    }
    catch(err){
        console.log(err.message);
    }

}

calculator(5, "hi", "divide"); // a is number and b is string. it must be the same type!
calculator("Z", "Y", "connect"); // connect is invalid operation. it must be one of those: add,subtract,multiply,divide
console.log(calculator(10, 7, "add")); // 17
console.log(calculator("A", "B", "subtract")) // NaN
console.log(calculator(8, 7, "multiply")); // 56
console.log(calculator(false, true, "divide")); // 0