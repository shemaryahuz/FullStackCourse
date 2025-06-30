// Read random line from a file

import fs from "fs";

const filePath = "./exercise4.txt";

function getRandomElement(arr){
    return arr[Math.floor(Math.random() * arr.length)]
}

fs.readFile(filePath, 'utf-8', (err, data) =>{
    if (err){
        console.error(err);
    }
    const lines = data.split("\n");
    console.log(`Random line: ${getRandomElement(lines)}`);
})



