// Print system memory percentage

import os from "os";

const totalMemory = (os.totalmem() / 1024/ 1024/ 1024).toFixed(2);

function printMemoryUsed(){
    let freeMemory = os.freemem / 1024/ 1024/ 1024;
    let memoryUsed = totalMemory - freeMemory;
    console.log(`Memory percentage used: ${(memoryUsed/ totalMemory * 100).toFixed(2)}%`);
}

let count = 5;
const intervalId = setInterval(() => {
    printMemoryUsed();
    count--;
    if (count === 0){
        clearInterval(intervalId);
    }
}, 1000);