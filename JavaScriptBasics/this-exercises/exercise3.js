// Mathod for callback

const myObject = {
    name: "my Object",
    myMethod: () => {
        console.log(`This is My Method. this - ${this.name}`);
    }
}

function logger(callback){
    console.log("Started loggin");
    callback();
    console.log("Ended loggin");
    
}

logger(myObject.myMethod);