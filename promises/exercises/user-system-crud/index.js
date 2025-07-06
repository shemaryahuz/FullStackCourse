// CRUD with promises

import { showWelcome, showGoodbye, displayMenu } from "./utils/menuUtils.js";
import { createUser, showUsers, updateUser, deleteUser } from "./utils/userOperations.js"

async function main() {

    showWelcome();

    const exit = "0";
    let toExit = false;
    while (!toExit){
        const choice = displayMenu();

        if(choice === exit){
            showGoodbye();
            toExit = true;
            continue;
        }

        await handleChoice(choice);
        console.log();
    }
}


async function handleChoice(choice) {
    switch (choice){
        case "1":
            await createUser();
            break;
        case "2":
            await showUsers();
            break;
        case "3":
            await updateUser();
            break;
        case "4":
            await deleteUser();
            break;
        default:
            console.log("Invalid choice. Try again.");
    }
}

main();