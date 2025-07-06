import {question} from "readline-sync";

export function showWelcome(){
    console.log("=== welcome to the User System ===");
}

export function showGoodbye(){
    console.log("=== Goodbye, Thank you for using our system ===");
}

export function displayMenu(){

    console.log("Options:");
    console.log("0. Exit.");
    console.log("1. Create User.");
    console.log("2. Show Users.");
    console.log("3. Update Username.");
    console.log("4. Delete User.");

    const choice = question("Enter your choice: ");
    return choice;
}