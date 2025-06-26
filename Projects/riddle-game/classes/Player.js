// Class to represent a Player

function getTotalTime(times){
    let sum = 0;
    times.forEach((time) => sum += time);
    return sum;
}

function getAverageTime(times){
    return getTotalTime(times) / times.length;
}

export default class Player{
    constructor(name){
        this.name = name;
        this.times = [];
    };
    recordTime(askFnunc){
        const start = Date.now() / 1000;
        askFnunc();
        const end = Date.now() / 1000;
        return end - start;
    };
    showState(){
        console.log(`Great job ${this.name}!`);
        for (let i = 0; i < this.times.length; i++){
            console.log(`Riddle ${i + 1}: ${this.times[i]} seconds`);
        }
        console.log(`Total time: ${getTotalTime(this.times)} seconds`);
        console.log(`Average time per riddle: ${getAverageTime(this.times)}`);
    };
}