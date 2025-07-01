// Directory files

import fs from "fs";

const dirPath = "../../.."

fs.readdir(dirPath, (err, files) => {
    if (err){
        console.log(err);
        return;
    }
    files.forEach((file) => {
        if (fs.statSync(dirPath + "/" + file).isFile())
            console.log(`File: ${file}`);    
    })    
})