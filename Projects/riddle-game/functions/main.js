

import Riddle from "../classes/Riddle.js"


export default function askRiddles(player, riddles){  
    for (let riddle of riddles){
        let r = new Riddle(riddle); 
        let time = player.recordTime(() => r.ask());
        player.times.push(time);
    }
}