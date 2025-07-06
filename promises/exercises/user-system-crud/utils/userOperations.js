import { question } from "readline-sync";
import { readUsers, writeUsers } from "./fileUtils.js";
import { logUsers, getUserIndex } from "./userUtils.js";

export async function createUser(){
    try {
        const username = question("Enter username to create: ");
        const users = await readUsers();
        users.push({username: username});
        await writeUsers(users);
        console.log(`User '${username}' added successfully.`);
    }
    catch(err){
        console.error(`Error creating user: ${err}`);
    }
}

export async function showUsers() {
    const users = await readUsers();
    logUsers(users);
}

export async function updateUser() {
    try{
        const users = await readUsers();
        const username = question("Enter your current username: ");
        const userIndex = getUserIndex(users, username);
        if (userIndex === -1){
            console.log(`Username '${username}' not found.`);
            return;
        }
        const newName = question("Enter your new name: ");
        users[userIndex].username = newName;
        await writeUsers(users);
        console.log(`Username changed to '${newName}' successfully.`);
    }
    catch(err){
        console.error(`Error updating user: ${err}`);
    }
}

export async function deleteUser() {
    try{
        const users = await readUsers();
        const username = question("Enter username to delete: ");
        const userIndex = getUserIndex(users, username);
        if (userIndex === -1){
            console.log(`Username '${username}' not found.`);
            return;
        }
        users.splice(userIndex, 1);
        await writeUsers(users);
        console.log(`User '${username}' deleted successfully.`);
    }
    catch(err){
        console.error(`Error deleting user: ${err}`);
    }
}