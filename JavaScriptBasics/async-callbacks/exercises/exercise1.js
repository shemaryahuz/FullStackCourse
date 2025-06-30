// File reader wit state

import fs from "fs";

try{
    const data = fs.readFileSync("./exercise1.txt");
    const states = fs.statSync("./exercise1.txt");

    console.log(`File Content:\n${data.toString()}`);
    console.log(`File size: ${states.size}`);
    console.log(`File Creation Time: ${states.birthtime}`);
}
catch(err){
    console.log(err); 
}
