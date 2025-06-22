// Print all even numbers between two numbers

function evensInRange(start, end){
    console.log(`All even nambers between ${start} to ${end}:`)
    for (let i = start; i <= end; i++){
        if (i % 2 == 0){
            console.log(i);
        }
    }
}
evensInRange(43, 64);