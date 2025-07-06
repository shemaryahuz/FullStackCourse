
import {readFile} from "fs";

const PATH = "./exercise2.txt";

function fileIsExists(path){
    return new Promise((resolve, reject) => {
        readFile(path, (err) => {
            if (err){
                reject(false);
            }
            resolve(true);
        })
    })
}

fileIsExists(PATH).then(res => console.log(res)).catch(err => console.log(err)); // true
fileIsExists(PATH + "???").then(res => console.log(res)).catch(err => console.log(err)); // false
