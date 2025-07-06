import fs from "fs/promises";

const DATA_PATH = "./data/users.txt";

export async function readUsers() {
    try{
        const data = await fs.readFile(DATA_PATH, 'utf-8');
        return JSON.parse(data);
    }
    catch(err){
        if (err.code === 'ENOENT'){
            return [];
        }
        console.log(`Error reading file: ${err}`);
    }
}

export async function writeUsers(users) {
    const usersStr = JSON.stringify(users);
    await fs.writeFile(DATA_PATH, usersStr);
}