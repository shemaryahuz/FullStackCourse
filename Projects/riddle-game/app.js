// Riddle Game Application
import allRiddles from "./riddles/riddles.js";
import Player from "./classes/Player.js";
import {question} from "readline-sync"
import askRiddles from "./functions/main.js"

console.log("=== Welcome to the Riddle Game ===");

const name = question("Please enter your name: ")
const player = new Player(name);

const level = question("Choose game level (all/ multi-choices/ easy/ medium/ hard): ")

const riddles = allRiddles.filter((riddle) => riddle.level === level);

if (!riddles){
    riddles = allRiddles;
}

askRiddles(player, riddles);
player.showState();