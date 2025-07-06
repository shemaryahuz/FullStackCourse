// CRUD with callbacks

import fs from "fs";
import {question} from "readline-sync";

const DATA_PATH = "./data/users.txt";

showWelcome();
menu();

function showWelcome(){
    console.log("=== welcome to the User System ===");
}

function menu(){

    console.log("Options:");
    console.log("1. Create User.");
    console.log("2. Show Users.");
    console.log("3. Update Username.");
    console.log("4. Delete User.");

    const choice = question("Enter your choice: ");
    manageUsers(choice);
}

function showUsers(users){
    for (let user of users){
        console.log(`User: ${user.username}`);
    }
}

function getUserIndex(users, username){
    for (let user of users){
        if(user.username === username){
            return users.indexOf(user);
        }
    }
    return -1;
}

function manageUsers(action){
    fs.readFile(DATA_PATH, 'utf-8', (err, data) => {
        if (err){
            console.error(`Error reading file: ${err}`);
            return;
        }
        const users =  JSON.parse(data);
        switch (action){
            case "1":
                try {
                    const username = question("Enter username to create: ");
                    users.push({username: username});
                    const usersStr = JSON.stringify(users);
                    fs.writeFile(DATA_PATH, usersStr, (err) => {
                        if (err){
                            console.error(`Error writing file: ${err}`);
                            return;
                        }
                        console.log(`User '${username}' added successfully.`);
                    });
                }
                catch(err){
                    console.error(`Error with creating user: ${err}`);
                }
                break;
            case "2":
                showUsers(users);
                break;
            case "3":
                try{
                    const username = question("Enter your current username: ");
                    const userIndex = getUserIndex(users, username);
                    if (userIndex === -1){
                        console.log(`Username '${username}' not found.`);
                        return;
                    }
                    const newName = question("Enter your new name: ");
                    users[userIndex].username = newName;
                    const usersStr = JSON.stringify(users);
                    fs.writeFile(DATA_PATH, usersStr, (err) => {
                        if (err){
                            console.error(`Error writing file: ${err}`);
                            return;
                        }
                        console.log(`Username changed to '${newName}' successfully.`);
                    });
                }
                catch(err){
                    console.error(`Error changing username: ${err}`);
                }
                break;
            case "4":
                try{
                    const username = question("Enter username to delete: ");
                    const userIndex = getUserIndex(users, username);
                    if (userIndex === -1){
                        console.log(`Username '${username}' not found.`);
                        return;
                    }
                    users.splice(userIndex, 1);
                    const usersStr = JSON.stringify(users);
                    fs.writeFile(DATA_PATH, usersStr, (err) => {
                        if (err){
                            console.error(`Error writing file: ${err}`);
                            return;
                        }
                        console.log(`User ${username} deleted successfully.`);
                    });
                }
                catch(err){
                    console.error(`Error deleting user: ${err}`);
                }  
        }
    });
}