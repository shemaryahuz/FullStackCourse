// Riddle Game Application
import riddles from "./riddles/riddles.js";
import Riddle from "./classes/Riddle.js"
import Player from "./classes/Player.js";
import {question} from "readline-sync"

console.log("=== Welcome to the Riddle Game ===");

const name = question("Please enter your name: ")
const player = new Player(name);

askRiddles();
player.showState();


function askRiddles(){  
    for (let riddle in riddles){
        let r = new Riddle(riddles[riddle]); 
        let time = player.recordTime(() => r.ask());
        player.times.push(time);
    }
}