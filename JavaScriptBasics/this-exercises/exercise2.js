// Arrow Function Inside Method

const myObject = {
    myMethod: () => {
        console.log(`MyMethod. this - ${this}`);
        const innerFunction = () => {
            console.log(`Inside Arrow function. this - ${this}`);
        }
        innerFunction();
    }
}

myObject.myMethod();