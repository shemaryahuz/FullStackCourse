// Mathod for callback

const myObject = {
    name: "my Object",
    myMethod: function () {
        console.log(`This is My Method. this - ${this.name}`);
    },
    fn: function () {
        const myMethod2 = () => {
            console.log(`This is My Method2. this - ${this.name}`);
        }
        myMethod2()
    }
}

function logger(callback) {
    console.log("Started loggin");
    callback();
    console.log("Ended loggin");
}

logger(() => myObject.myMethod()); // This is My Method. this - my Object
logger(() => myObject.fn()); // This is My Method2. this - my Object
