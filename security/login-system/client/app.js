import { question } from "readline-sync";
import { loginUser, signupUser } from "./services/apiService.js";
import { showMenuByRole } from "./utils/auth.js";


async function promptUser() {
    console.log("Welcome! what would you like to do?");
    console.log("1. login");
    console.log("2. signup");

    const choice = question("> ");

    if (choice != "1" && choice != "2"){
        console.log("Invalid choice.");
        return;
    }

    const username = question("Enter username: ");
    const password = question("Enter password: ");

    let response;

    if (choice === "1"){
        response = await loginUser(username, password);
    }
    else{
        response = await signupUser(username, password);
    }

    if (response && response.user){
        console.log(`\n${response.message}`);
        console.log(`Logged in as: ${response.user.username} ${response.user.role}\n`);

        await showMenuByRole(response.user.role);
    }
    else{
        console.log("signup/login failed.");
    }
}

async function main() {
    await promptUser();
}

main();