// Riddle Game Application
import riddles from "./riddles/riddles.js";
import Riddle from "./classes/Riddle.js"


for (let riddle in riddles){
    let r = new Riddle(riddles[riddle]);
    r.ask();
}