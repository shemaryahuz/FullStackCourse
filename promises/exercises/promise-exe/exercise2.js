// Read file with Promise

import {readFile} from "fs";

const PATH = "./exercise2.txt";

function readFileContent(path){
    return new Promise((resolve, reject) => {
        readFile(path,"utf-8", (error, content) => {
            if (error){
                reject(error);
            }
            resolve(content);
        });
    })
}

readFileContent(PATH).then((resolved) => 
    console.log(`File content: ${resolved}`)
).catch((error) => console.error(`Error to read file: ${error.message}`));