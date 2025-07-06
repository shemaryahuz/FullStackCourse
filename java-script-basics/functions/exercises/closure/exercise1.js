// Counter closure function

function createCounter(){
    let count = 0
    return () => {
        count++;
        return count;
    };
}

const counter = createCounter();

for (let i = 0; i < 10; i++){
    console.log('Counter:', counter());
}