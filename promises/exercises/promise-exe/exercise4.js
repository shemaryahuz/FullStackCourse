// Timer race

function raceTimers(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Timer B finished!")}, 3000);
        setTimeout(() => {
            resolve("Timer A finished!")}, 2000);
    })
}

raceTimers().then( res => console.log(res));