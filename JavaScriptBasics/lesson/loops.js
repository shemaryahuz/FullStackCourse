// For loops
console.log('All the numbers from 0 to 50 that divided by 3:');
for (let i = 0; i <= 50; i ++){
    if (i % 3 == 0){
        console.log(i);
    }
}

// While loops
console.log("Numbers from 30 to -9:")
let num = 30;
let stop = false;
while (num > -20 && !stop){
    console.log(num);
    num--;
    if (num == -10){
        stop = true;
    }
}

