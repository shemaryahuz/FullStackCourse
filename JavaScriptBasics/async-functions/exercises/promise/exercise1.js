
// Delated greet

function delayedGreet(name, delaySeconds){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello " + name + "!");
        }, delaySeconds * 1000);
    })
}

delayedGreet("Avi", 3).then(resolved => {
    console.log(resolved);
});
