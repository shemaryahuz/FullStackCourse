// Countdown timer


function recTimer(count){
    if (count === 0){
        console.log("Time's up!");
        return;
    }
    console.log(count);
    setTimeout(() => {
        recTimer(count - 1)
    }, 1000)
}

recTimer(5);