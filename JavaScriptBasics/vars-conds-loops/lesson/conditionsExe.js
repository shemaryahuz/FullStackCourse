// Conditions task
let age = 10;
let height = 80;
let sunOfManager = false;
for (let i = 0; i < 4; i++){
    if (sunOfManager == true)
        console.log("Go wherever yo want");
    else if (age < 15)
        console.log("Cannat enter");
    else if (age > 15 && height < 110)
        console.log("Go on kids ride");
    else if (age > 15 && height > 110){
        console.log("Go on Rollercoaster")
        sunOfManager = true;
    }
    age += 20;    
    height += 20;
}
