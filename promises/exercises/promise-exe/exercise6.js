function firsPromise(){
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve("First");
            }, 1000)
    })
}
function secondPromise(){
    return new Promise((resolve) => {
            setTimeout(()=>{
                resolve("Second");
            }, 2000)
    })
}
function thirdPromise(){
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve("Third");
            }, 3000)
    })
}


function waitAll(){
    const p1 = firsPromise();
    const p2 = secondPromise();
    const p3 = thirdPromise();
    Promise.all([p1, p2, p3])
        .then(promises => console.log(promises))
        .catch(err => console.error(err));
}
waitAll();